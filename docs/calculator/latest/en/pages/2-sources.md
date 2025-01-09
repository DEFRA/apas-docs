<div id='top'></div>

# Input

- [Scenario input](#section1)
    - [Emission sources](#section1a)
        - [Location](#section1ai)
        - [Source characteristics](#section1aii)
        - [Additional characteristics](#section1aiii)
    - [Buildings](#section1b)
    - [Time-varying profiles](#section1c)
- [The Map](#section2)
- [Contact us](#section3)

To make comparative calculations, you need to input emission sources, associated buildings (if relevant) and diurnal profiles as part of a scenario.

You need to create a scenario with at least one emission source for each calculation. 

You can choose from different types of scenario. jon change

**1. Reference**

You should use this for a current situation, such as for existing energy plant.

**2. Temporary**

You should use this for short-term situations, such as the construction phase of a new development.

**3. Project**

You should use this for modelling the situation following the completion or a proposed plan or project following completion. This is also the default setting for a newly created scenario.

**4. Off-site reduction**

Refers to a scenario where a nearby emission source is no longer operating. For example, if a neighbouring farm closes business and there is a resulting reduction in local emission sources.

**5. In-combination reference**

Can be used as part of an in-combination assessment.

**6. In-combination project**

Can be used to represent the proposed situation for nearby emission sources. Just as a user can create a 'Reference' and 'Project' scenario for their own plan or project, they can also create 'In-combination reference' and 'In-combination project' scenarios for nearby plans and projects that should be included in the in-combination assessment.

<div id='section1'></div>

## Scenario input

<div id='section1a'></div>

### Emission sources

Emission sources are grouped into 5 sectors. Each of these sectors includes specific options and parameters to help you correctly define the emissions.

**1. Energy** 

This sector includes the following options:
- large combustion plant
- medium combustion plant
- specified generator
- other.

  *The medium combustion plant option is currently preview only, it does not calculate emissions and will not be included in any calculations. This option is included to demonstrate how the service could be updated in the future to support the Medium Combustion Plant Directive (MCPD) by calculating emissions based on information entered by the user, such as fuel type and operating hours per year. The other 3 options in the energy sector group are fully functional and allow you to specify emissions of oxides of nitrogen  (NO<sub>x</sub>) and ammonia (NH<sub>3</sub>) in units of kilograms per year.*

**2. Agriculture**

This sector includes the following options:
- housing emissions
- manure storage
- farmland
- greenhouse horticulture
- other

The Farmland sector is further broken down into:
- farmland grazing
- manure application (animal)
- manure application (fertilizer)
- organic processes
- outdoor yards.

  *The default emission factors used for agriculture come from the Simple Calculation of Atmospheric Impact Limits (SCAIL). You can also enter your own emission factors using the 'custom specification' option (available under housing and manure storage) or by selecting the 'other' sector.*

**3. Traffic**

The 'Source characteristics' section allows you to enter information about barriers which could affect the spread of pollution away from roads, such as noise barriers, buildings or vegetation and tree belts. These are often known as 'street canyon effects.' Suggested default porosity values are provided based on the type of road barrier but you can enter custom values.

The 'Emission factor toolkit' (v11.0) option for a new subsource calculates oxides of nitrogen (NO<sub>x</sub>) and ammonia (NH<sub>3</sub>) emissions based on the number, type and speed of vehicles on a particular road that you enter.

**4. Industry**

You should use this sector group for industrial emission sources that are not energy sources. Specify emissions in units of kilograms per year.

This sector is made up of the following options:
- waste processing
- food and beverages
- chemical industry
- building materials
- basic metal
- metalworking industry
- other

**5. Other**

Use this  for emission sources that do not fit into any of the other sector groups. Specify emissions in units of kilograms per year. In the new source panel, you can enter information about the emission source. Start by entering a name, sector group and sector (if applicable). Do not include a comma in the source name.

<div id='section1ai'></div>

#### Location

To specify the location, click on the map to draw emission sources, or enter the coordinates directly as a Well-Known Text (WKT) string. This will show the source characteristics relevant to the chosen sector.

**Please note that, if entering coordinates manually, the x and y coordinates should be separated with a space, not a comma.**

Once you have drawn a point, line or area source, you cannot move it.

<div id='section1aii'></div>

#### Source characteristics

Use the source characteristics panel to enter information about the emission source, such as the height and temperature.

You can choose to input the temperature of the emissions, the density of the emissions or assume they are the same as ambient temperature and density.

<div id='section1aiii'></div>

#### Additional characteristics

Below the source characteristics panel will be additional panels that are relevant to the chosen sector. For some sectors (for example, emissions from livestock, agricultural land, and road traffic), sources are subdivided into subsources.

<div id='section1b'></div>

### Buildings

Including buildings is only required if you need to include building influences in the calculation. 

You can add new buildings by drawing the outline on the map or specifying the coordinates. You can then enter the height of the building. You can specify rectangular and circular buildings. When drawing the building, double click to finish drawing.

To include the impact of building influence in the calculation, tick 'Building influence' in the source characteristics of the relevant emission source and choose which building to link. This step must be carried out for all sources that may be affected by buildings. If the building is not yet available, you can click on 'Add' to create the building.

<div id='section1c'></div>

### Time-varying profiles

Every emission source will also have an associated time-varying profile. The profile describes how the emissions from a source vary over the course of:
- a day (split into 24 hours)
- a week (split into Weekday, Saturday and Sunday)
- a year (split into 12 months)

To show the list of predefined profiles and the icon for creating new profile - click the arrow next to 'Time-varying profiles'. The list includes predefined profiles for the road transport sector group. You can click or hover over one of the predefined profiles to view the details. To create a new diurnal profile, click on the 'New diurnal profile' icon.

The 'Table' option allows you to enter values (known as 'hourly factors') for specific hours of the day and days of the week. 

The 'Raw input' option allows you to provide the same information, by copying and pasting information from a comma-separated values (.csv) file or a table in from an Excel (.xls or .xlsx) file. 

When using either option, the total hourly factors must equal 168, to match the number of hours in a week. When calculating this sum, each of the hourly factors entered in the 'Weekday avg' column is multiplied by 5, because there are 5 weekdays.

Default diurnal profiles are assigned to each new emission source, depending on the sector  the source is in.

To create a new monthly profile, click 'New monthly profile'. As with diurnal profiles, you can add information using either the table or raw input methods described above. In this case, the numbers in the table must equal 12.

For further information about how time-varying profiles have been implemented in the service, please refer to the section on .fac files in the [ADMS Urban user guide](https://www.cerc.co.uk/environmental-software/assets/data/doc_userguides/CERC_ADMS-Urban5.0_User_Guide.pdf) (section 4.1.1 of the guide).

#### Road transport sources

Road transport sources in all years will be assigned diurnal profiles based on DfT statistics for 2022.

All other sectors have a 'Continuous' diurnal profile as default, indicating that the emissions do not vary over the course of the day or the week. You can change this default profile to reflect the actual operation of a source.

<div id='section2'></div>

## The Map

Clicking on a source, building, or diurnal profile opens the detailed information panel. This will display all of the characteristics of the source, building or diurnal profile are displayed here.

Sources and assessment points can be viewed simultaneously by selecting the layers in the Layerpanel, found in the toolbar to the right of the map.

**Please note that even when using Irish grid references, the map will display the cursor location according to the British National Grid in the bottom left corner.**

<div id='section3'></div>

## Contact us

To contact our team for further help, you can:
- call 0330 124 2162 (Monday to Friday, 9:00am to 5:00pm, except statutory holidays)
- email ukapas@defra.gov.uk

We aim to reply to your emails within 2 working days.

[Return to top](#top)
