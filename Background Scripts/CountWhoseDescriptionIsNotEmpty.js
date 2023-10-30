 var ga = new GlideAggregate('incident');


    ga.addAggregate('COUNT', 'number');
    ga.addNotNullQuery('short_description');

    ga.query();


    if (ga.next()) {
        var incidentCount = ga.getAggregate('COUNT', 'number');
        gs.log("Number of Incident Records with Non-Empty Short Descriptions: " + incidentCount);
    } else {
        gs.log("No incident records found with non-empty short descriptions.");
    }
