## Emission Sources

Emission sources are grouped into 5 sectors. Each of these sectors includes specific options and parameters to help you correctly define the emissions.

- [energy](2-1-2-source-sector-group-ENERGY.md)
- [agriculture](2-1-2-source-sector-group-AGRICULTURE.md)
- [traffic](2-1-2-source-sector-group-ROAD_TRANSPORTATION.md)
- [industry](2-1-2-source-sector-group-INDUSTRY.md)
- [other](2-1-2-source-sector-group-OTHER.md)

#### Location

To specify the location, click on the map to draw emission sources, or enter the coordinates directly as a Well-Known Text (WKT) string. The default coordinate system for WKT is British National Grid, but Irish National Grid coordinates can be used and converted automatically by changing your preferences in the settings menu (the cog symbol in the bottom left toolbar). 

**Please note that, if entering coordinates manually, the x and y coordinates should be separated with a space, not a comma.**

Once you have drawn a point, line or area source, you cannot move it.

Once the location has been entered and the sector selected, options to input characteristics relevant to the chosen sector will appear.

#### Time-varying profiles

Every emission source will also have an associated time-varying profile. The profile describes how the emissions from a source vary over the course of:
- a day (split into 24 hours)
- a week (split into Weekday, Saturday and Sunday)
- a year (split into 12 months)

By default, road transport sources in all years will be assigned diurnal time-varying profiles based on Department for Transport statistics for 2022 and a continuous monthly time-varying profile.

All other sectors have a continuous diurnal and monthly time-varying profile as default, indicating that the emissions do not vary over the course of the day or the week. 

For all emission sources, you can change the default profile to reflect the actual operation of a source.

*Note that the service does not automatically save your entered data. You can use the export functions to save all data from your current calculation in a format that can later be imported back again, for example if you need to make amendments or further calculations.*



