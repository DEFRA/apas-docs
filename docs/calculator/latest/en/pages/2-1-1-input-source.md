# Emission Sources

- [Location](#section1)
- [Time-varying Profiles](#section2)

Emission sources are grouped into 5 sectors:
- [energy](2-1-2-source-sector-group-ENERGY.md)
- [agriculture](2-1-2-source-sector-group-AGRICULTURE.md)
- [traffic](2-1-2-source-sector-group-ROAD_TRANSPORTATION.md)
- [industry](2-1-2-source-sector-group-INDUSTRY.md)
- [other](2-1-2-source-sector-group-OTHER.md)

 Each of these sectors includes specific options and parameters to help you correctly define the emissions.

<div id='section1'></div>

## Location

To specify the location, click on the map to draw emission sources, or enter the coordinates directly as a Well-Known Text (WKT) string. The default coordinate system for WKT is British National Grid, but Irish National Grid coordinates can be used and converted automatically by changing your preferences in the Preferences menu (the cog symbol in the bottom left toolbar). 

*Please note that, if entering coordinates manually, the x and y coordinates should be separated with a space, not a comma.*

When drawing a line or area source, double click to finish drawing. Once you have drawn a point, line or area source, you cannot move it.

Once the location has been entered and the sector selected, options to input characteristics relevant to the chosen sector will appear.

<div id='section2'></div>

## Time-varying profiles

Time-varying profiles describe how the emissions from a source vary over the course of:
- a day (split into 24 hours)
- a week (split into Weekday, Saturday and Sunday)
- a year (split into 12 months)

By default, road transport sources will be assigned diurnal time-varying profiles based on Department for Transport statistics and a continuous monthly time-varying profile.

All other sectors have a continuous diurnal and monthly time-varying profile as default, indicating that the emissions do not vary over the course of the day, week or year. 

For all emission sources, you can change the default profile to a custom profile reflects the actual operation of a source.

*Note that the service does not automatically save your entered data. You can export your input data to save your work in a format that can later be reimported.*

[Go to previous page](2-sources.md)
