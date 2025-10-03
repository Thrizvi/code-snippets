// This script can be used in a Script Include, Business Rule, or Background Script
var incidentGR = new GlideRecord('incident');

// Replace 'INC0010001' with the actual incident number you want to update
if (incidentGR.get('number', 'INC0010001')) {
    // Update desired fields
    incidentGR.short_description = 'Updated short description for the incident';
    incidentGR.description = 'Detailed description has been updated via script.';
    incidentGR.priority = 2; // Example: changing priority to 2

    // Save the changes
    incidentGR.update();
    gs.info('Incident updated successfully: ' + incidentGR.number);
} else {
    gs.info('Incident not found');
}
