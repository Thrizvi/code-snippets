# Update Incident Script in ServiceNow

This script is designed to update an existing incident record in ServiceNow using the GlideRecord API. It locates an incident by its unique number and modifies key fields such as `short_description`, `priority`, and `description`.

## 🛠️ Script Functionality

- Connects to the `incident` table using GlideRecord.
- Searches for an incident by its `number` (e.g., `INC0010001`).
- If the incident is found:
  - Updates the `short_description` field.
  - Updates the `priority` field.
  - Updates the `description` field.
  - Saves the changes using the `update()` method.
- Logs a message if the incident is not found.

## 📌 Example Usage


var incidentGR = new GlideRecord('incident');
if (incidentGR.get('number', 'INC0010001')) {
    incidentGR.short_description = 'Updated short description';
    incidentGR.description = 'Updated description';
    incidentGR.priority = 2;
    incidentGR.update();
