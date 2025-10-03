# Create Priority 1 Incident in ServiceNow

This script is designed to create a **Priority 1 incident** in ServiceNow using the GlideRecord API. It can be used in a **Script Include** or **Business Rule** to automate the creation of critical incidents.

## 📝 Script Functionality

- Initializes a new incident record.
- Sets the following fields:
  - `short_description`: Brief summary of the incident.
  - `description`: Detailed explanation of the issue.
  - `priority`: Set to `1` (Critical).
  - `impact`: Set to `1` (High).
  - `urgency`: Set to `1` (High).
  - `caller_id`: Automatically assigned to the current user.
  - `category`: Example category set to `'network'`.
- Inserts the incident record into the database.

## 🚀 Usage

This script can be placed in:
- A **Script Include** to be called programmatically.
- A **Business Rule** to trigger incident creation based on conditions.

## 📌 Example


var incidentGR = new GlideRecord('incident');
incidentGR.initialize();
incidentGR.short_description = 'Critical Incident - Immediate Attention Required';
incidentGR.description = 'This is a Priority 1 incident created via script.';
incidentGR.priority = 1;
incidentGR.impact = 1;
incidentGR.urgency = 1;
incidentGR.caller_id = gs.getUserID();
incidentGR.category = 'network';
incidentGR.insert();