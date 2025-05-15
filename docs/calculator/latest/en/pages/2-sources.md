<div id='top'></div>

# Input

- [Scenario input](#section1)
    - [Emission sources](#section1a)
    - [Buildings](#section1b)
    - [Time-varying profiles](#section1c)
- [The Map](#section2)

To carry out the calculations, you need to [input emission sources](2-1-1-input-source.md), associated buildings (if relevant) and time-varying profiles as part of a scenario. Scenario year should be the proposed year of operation for the project; this will appear in any PDF reports generated from this scenario.

You need to create a scenario with at least one emission source for each calculation. 

You can choose from different types of scenario.

**1. Reference**

You should use this for a current situation, such as for an existing energy plant.

**2. Temporary**

You should use this for short-term situations, such as the construction phase of a new development.

**3. Project**

You should use this for modelling the situation following the completion of a proposed plan or project. This is also the default setting for a newly created scenario.

**4. Off-site reduction**

**This feature is not currently implimented in UK policy, however is currently commonly used in the Dutch version of the tool.**

Refers to a scenario where a nearby emission source is no longer operating. For example, if a neighbouring farm closes business and there is a resulting reduction in local emission sources. The netting factor is the proportion of the off-site reduction that will be subtracted from the process contribution 


**5. In-combination reference**

Can be used as part of an in-combination assessment.

**6. In-combination project**

Can be used to represent the proposed situation for nearby emission sources. Just as a user can create a 'Reference' and 'Project' scenario for their own plan or project, they can also create 'In-combination reference' and 'In-combination project' scenarios for nearby plans and projects that should be included in the in-combination assessment.

<div id='section1'></div>

## Scenario input

Clicking on a source, building, or time-varying profile in the Scenario input panel opens the detailed information panel and displays all of the characteristics of that source, building or time-varying profile. Double clicking a source or building will zoom in on its location on the map.

<div id='section1a'></div>

### Emission sources

To [input a new emission source](2-1-1-input-source.md), click on the 'New source' button under the Emission sources menu. 

<div id='section1b'></div>

### Buildings

To [input a new building](2-2-building-create.md), click on the 'New building' button under the Buildings menu.

<div id='section1c'></div>

### Time-varying profiles

Every emission source will also have an associated time-varying profile. The profile describes how the emissions from a source vary over the course of:
- a day (split into 24 hours)
- a week (split into Weekday, Saturday and Sunday)
- a year (split into 12 months)

Default time-varying profiles are assigned to each new emission source, depending on the sector the source is in. Predefined and custom time-varying profiles can be viewed by clicking or hovering over them under the Time-varying profiles menu or can be viewed when inputting the emission source(s). 

To create a [new custom diurnal profile](2-3-1-tvp-diurnal-create.md), click on the clock icon. The calendar icon allows you to do the same for a [monthly profile](2-3-2-tvp-monthly-create.md). 

For further information about how time-varying profiles have been implemented in the service, please refer to the section on .fac files in the [ADMS Urban user guide](https://www.cerc.co.uk/environmental-software/assets/data/doc_userguides/CERC_ADMS-Urban5.0_User_Guide.pdf) (section 4.1.1 of the guide).

<div id='section2'></div>

## The Map

Sources, custom assessment points and additional information can be viewed simultaneously by selecting the layers in the Layerpanel, found in the toolbar to the right of the map.
For example, you can select a preferred map base layer which includes OS and OSNI maps.  

**Please note that even when using Irish grid references, the map will display the cursor location according to the British National Grid in the bottom left corner.**

[Return to top](#top)
