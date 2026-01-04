import { LeadData, SubmitResponse } from '../types';

/* 
  ⚠️ CRITICAL SETUP STEP ⚠️

  You MUST create a NEW deployment for the code changes to take effect.
  
  1. Open your Google Sheet > Extensions > Apps Script.
  2. Paste the code below into Code.gs (Delete old code first):

  // ================= COPY CODE BELOW =================
  function doPost(e) {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);
    
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
      
      // We use e.parameter to get data from URLSearchParams
      var p = e.parameter;
      
      // Columns: Timestamp | Email | Name | Surname | Phone
      sheet.appendRow([new Date(), p.email, p.emri, p.mbiemri, p.telefonnumri]);
      
      return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
      return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": e}))
        .setMimeType(ContentService.MimeType.JSON);
    } finally {
      lock.releaseLock();
    }
  }
  // ================= END COPY CODE =================

  3. Click "Deploy" (blue button) > "New deployment". 
     (IMPORTANT: Do not just save. You MUST click "New deployment").
  4. Select type: "Web app".
  5. Description: "v3 - Form Data".
  6. Execute as: "Me".
  7. Who has access: "Anyone" (Critical!).
  8. Click "Deploy".
  9. Copy the NEW "Web App URL" and paste it below.
*/

// 👇 PASTE YOUR NEW WEB APP URL HERE 👇
const GOOGLE_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbz3p-9cPWEIx4QA2Do2tv2wLFSE0K6PB3gTFougEEH6oZPr8d_Y8U1M8v-hNy-KxJKzUQ/exec'; 

export const submitLead = async (data: LeadData): Promise<SubmitResponse> => {
  // Check if the user has configured the URL correctly
  // We only show error if the URL still contains the default placeholder text
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('PASTE_YOUR')) {
    console.error("Configuration Error: GOOGLE_SCRIPT_URL is not set.");
    alert("⚠️ SETUP REQUIRED ⚠️\n\nYou must deploy a 'New deployment' in Google Apps Script and paste the new URL in services/sheetService.ts");
    return { success: false, message: "Gabim konfigurimi: URL mungon." };
  }

  try {
    // We switch to URLSearchParams (application/x-www-form-urlencoded)
    // This is much more reliable with Google Apps Script than raw JSON.
    const formBody = new URLSearchParams();
    formBody.append('email', data.email);
    formBody.append('emri', data.emri);
    formBody.append('mbiemri', data.mbiemri);
    formBody.append('telefonnumri', data.telefonnumri);

    // Using 'no-cors' mode is required for client-side calls to Google Scripts.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    return { success: true, message: "Faleminderit! Të dhënat tuaja u ruajtën me sukses." };

  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "Ndodhi një gabim gjatë lidhjes. Ju lutemi provoni përsëri." };
  }
};