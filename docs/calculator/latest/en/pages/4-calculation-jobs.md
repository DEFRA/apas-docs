<div id='top'/>

# Calculation jobs

- [Scenario overview](#section1)
- [Calculation job](#section2)
    - [Meteorological site](#section2a)
    - [Dispersion options](#section2b)
    - [Starting a calculation job](#section2c)
- [Contact us](#section3)

<div id='section1'></div>

## Scenario overview

The scenario overview shows all of the scenarios you've uploaded, as well as some summary information, such as the:
- calculation year
- number of emission sources
- emissions for oxides of nitrogen (NO<sub>x</sub>) and ammonia (NH<sub>3</sub>) in kilograms per year
  
Scenarios that are included in the current calculation job are shown with a blue bar on the left.

The calculation method you select determines the area and points for which results will be calculated.

<div id='section2'></div>

## Calculation job

A calculation job is a group of scenarios that will be calculated together as a set. Each calculation job requires at least 1 scenario.

#### Calculation job type

- **process contribution** - a project scenario is calculated, optionally in combination with a reference and/or an off site reduction scenario
- **maximum temporary effect** - the maximum of one or more temporary scenarios is calculated, optionally in combination with a reference and/or an off site reduction scenario
- **in-combination process contribution** - a project scenario is calculated together with 1 or more in combination scenarios, optionally in combination with a reference and/or an off site reduction scenario
- **single scenario** - one scenario is calculated

#### Calculation method

- **quick run** - you can use this method to more quickly calculate an indicative set of results, using only a small proportion of the meteorological dataset.

- **formal assessment** - you can use this calculation method as part of the formal permit or planning process. Results are calculated for the extents of each designated site located within 15 km of the emission sources. As a future feature, it will be possible to define different default calculation settings depending on the Area (England, Northern Ireland, Scotland or Wales).

- **custom assessment points** - this method will calculate results only for the individual assessment points defined using the 'Assessment points' screen. It will not calculate results for the full extents of all designated sites located within a certain distance of the emission sources. To obtain results across the extents of nearby designated sites as well as at individual assessment points, you need to run the calculation twice using different calculation methods (i.e. the custom assessment points method as well as one of the other options). This calculation method can also be useful for running a fast calculation, using only a few custom assessment points, and sense-checking that the results are generally as expected

- **custom assessment** - this method calculates results for the extents of each designated site located within a certain distance of the emission sources. It allows you to change many of the calculation settings and options, including the calculation distance; the default is a 15 km radius around the emission sources but you can decrease this value. You can change options in the basic and advanced modes with this method, unlike in the formal assessment method.

#### Calculation method

If you select the calculation job type 'In-combination process contribution', you can also include projects from the archive by ticking the relevant box.

<div id='section2a'></div>

### Meteorological site

You can select the meteorological site and year from the relevant dropdown menus.

<div id='section2b'></div>

### Dispersion options

You can change the minimum Monin-Obukhov length, surface albedo and Priestley-Taylor parameter values. The surface albedo is the ratio of reflected to incident shortwave solar radiation at the surface of the earth. The Priestley-Taylor parameter represents the moisture available for evaporation.

For further information about setting meteorological parameters, including an explanation of the default values, refer to the [ADMS Urban user guide](https://www.cerc.co.uk/environmental-software/assets/data/doc_userguides/CERC_ADMS-Urban5.0_User_Guide.pdf).

Plume depletion refers to the removal of pollutants from the plume through deposition. This process decreases the amount of a pollutant that remains in the air as it travels over a surface. You can tick the appropriate boxes to include plume depletion (based on dry deposition processes) for:
- ammonia (NH<sub>3</sub>)
- oxides of nitrogen (NO<sub>x</sub>)
- both

It does not calculate plume depletion for NO<sub>x</sub> from road sources, even if you tick this option under advanced options.

If the effect of the terrain height in the assessment area is expected to be significant, tick 'Complex terrain'.

<div id='section2bii'></div>

#### Road emissions primary NO<sub>2</sub> (fNO<sub>2</sub>) options

For road transport emissions, the service uses the same calculation method as the Defra (NO<sub>x</sub>) to (NO<sub>2</sub>) calculator (version 8.1) to convert (NO<sub>x</sub>) to (NO<sub>2</sub>).

Most of the input parameters required by the NO<sub>x</sub> to NO<sub>2</sub> calculator approach, such as regional concentrations of various pollutants, are determined automatically, but you can also choose to specify the primary NO<sub>2</sub> fractions (fNO<sub>2</sub>) used for automatic and custom receptor points.

Automatic receptors are those that are generated when the calculation method selected is either 'Formal assessment' or 'Custom assessment'. Custom assessment points are those that have been defined in the 'Assessment points' screen. The options available for determining fNO<sub>2</sub> are:
- **'Default based on location'** - the fNO<sub>2</sub> value is determined based on the location of the assessment point or receptor, and specifically whether it is located in an area classified as either within London, within another urban area, or within a rural area of the UK. This assumes that the type of vehicles, and therefore the fNO<sub>2</sub> characteristics, for a specific assessment point or receptor are primarily determined by its location. This is also the default approach used in basic mode.
- **'Specified below'** - you can use this to enter a single custom fNO<sub>2</sub> value in the field that appears below, which will be used in the NO<sub>x</sub> to NO<sub>2</sub> calculations.
- **'Use individual values'** - this option will use the individual fNO<sub>2</sub> values you enter for each custom assessment point in the 'Assessment points' screen for the (NO<sub>x</sub>) to (NO<sub>2</sub>) calculations.

<div id='section2c'></div>

### Starting a calculation job

Once you have finished selecting calculation job settings, start the current calculation job by clicking 'Calculate'. You will automatically be taken to the result screen. The current calculation job can also be exported by clicking 'Export this job'.

Large calculation jobs will take longer to run.

<div id='section3'></div>

## Contact us

To contact our team for further help, you can:
- call 0330 124 2162 (Monday to Friday, 9:00am to 5:00pm, except statutory holidays)
- email ukapas@defra.gov.uk

We aim to reply to your emails within 2 working days.

[Return to top](#top)
