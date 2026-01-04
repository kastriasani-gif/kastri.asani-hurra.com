import { LeadData, SubmitResponse } from '../types';

/**
 * GUIDE TO CONNECT GOOGLE SHEET:
 * 
 * Since this is a static frontend site, we need a small "backend" script to safely write to Google Sheets.
 * We use Google Apps Script for this.
 * 
 * 1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1zUsP2DQau4Lqb0tw5-0MBVsPIssVDbjGuF9uFqBNgVs/edit
 * 2. Click Extensions > Apps Script.
 * 3. Delete any code there and paste the following:
 * 
 *    function doPost(e) {
 *      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *      var data = JSON.parse(e.postData.contents);
 *      
 *      // Append row: Timestamp, Email, Emri, Mbiemri, Telefonnumri
 *      sheet.appendRow([new Date(), data.Email, data.Emri, data.Mbiemri, data.Telefonnumri]);
 *      
 *      return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
 *    }
 * 
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type "Web app".
 * 6. Set "Who has access" to "Anyone". (Important!)
 * 7. Click "Deploy" and copy the "Web App URL".
 * 8. Paste that URL below in the GOOGLE_SCRIPT_URL constant.
 */

// REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_placeholder_example_replace_me/exec'; 

// For demonstration purposes, if the URL is not set up, we will simulate a success after a delay.
const IS_DEMO_MODE = true; 

export const submitLead = async (data: LeadData): Promise<SubmitResponse> => {
  if (IS_DEMO_MODE) {
    console.log("Simulating submission to Google Sheet:", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Faleminderit! Të dhënat tuaja u ruajtën me sukses." });
      }, 1500);
    });
  }

  try {
    const payload = {
      Email: data.email,
      Emri: data.emri,
      Mbiemri: data.mbiemri,
      Telefonnumri: data.telefonnumri
    };

    // Google Apps Script requires 'no-cors' mode for simple posts from browser, 
    // or properly handled CORS in the script. The simplest robust way for a landing page:
    // We use fetch with 'no-cors' if we just want to fire and forget, but we want confirmation.
    // Standard fetch to Apps Script often follows redirects.
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return { success: true, message: "Faleminderit! Të dhënat tuaja u ruajtën me sukses." };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "Ndodhi një gabim. Ju lutemi provoni përsëri." };
  }
};