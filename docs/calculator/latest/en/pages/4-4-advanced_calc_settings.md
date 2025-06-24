<div id='top'></div>

# Advanced Settings

- [Dispersion options](#section1)
- [Surface roughness](#section2)
- [Complex terrain](#section3)
- [Road emissions primary NO<sub>2</sub> (fNO<sub>2</sub>) options](#section4)

<div id='section1'></div>

## Dispersion options

You can change the:
- **minimum Monin-Obukhov length** - a measure of stability of the atmosphere to allow for the effect of heat production in cities
- **surface albedo** - the ratio of reflected to incident shortwave solar radiation at the surface of the earth
- **Priestley-Taylor parameter values** - represents the moisture available for evaporation

For further information about setting meteorological parameters, including an explanation of the default values, refer to the [ADMS-Urban user guide](https://www.cerc.co.uk/environmental-software/assets/data/doc_userguides/CERC_ADMS-Urban5.0_User_Guide.pdf).

Plume depletion refers to the removal of pollutants from the plume through deposition. This process decreases the amount of a pollutant that remains in the air as it travels over a surface. You can tick the appropriate boxes to include plume depletion (based on dry deposition processes) for:
- ammonia (NH<sub>3</sub>)
- oxides of nitrogen (NO<sub>x</sub>)
- both

It does not calculate plume depletion for NO<sub>x</sub> from road sources, even if you tick this option under advanced options.

<div id='section2'></div>

## Surface roughness

The surface roughness values are automated within the 'Get an air pollution assessment' calculator, these values cannot be defined or amended by users. The values are based on the land use maps published by the UK Centre for Ecology and Hydrology (UKCEH). The calculator averages the UKCEH 10 x 10 m grid to match the calculator's hexagonal fixed assessment grid.

<div id='section3'></div>

## Complex terrain

The service can model the effects of complex terrain on pollutant dispersion using terrain maps published by the Ordnance Survey (OS) at a 50 m resolution. The calculator processes the terrain files to ensure they cover the correct size for the modelling area. It uses the default ADMS FLOWSTAR internal grid resolution (64 x 64 grid).

<div id='section4'></div>

## Road emissions primary NO<sub>2</sub> (fNO<sub>2</sub>) options

For road transport emissions, the service uses the same calculation method as the Defra NO<sub>x</sub> to NO<sub>2</sub> calculator to convert NO<sub>x</sub> to NO<sub>2</sub>.

Most of the input parameters required by the NO<sub>x</sub> to NO<sub>2</sub> calculator approach, such as regional concentrations of various pollutants, are determined automatically, but you can also choose to specify the primary NO<sub>2</sub> fractions (fNO<sub>2</sub>) used for the fixed assessment grid and custom assessment points. The fixed assessment grid in the hexagonal grid of receptor points that is generated automatically on nature sites as part of a formal assessment or quick run calculation job.

The options available for determining fNO<sub>2</sub> are:
- **'Default based on location'** - the fNO<sub>2</sub> value is determined based on the location of the assessment point or receptor. Specifically whether it is located in an area classified as either within London, within another urban area, or within a rural area of the UK. This assumes that the type of vehicles, and therefore the fNO<sub>2</sub> characteristics, for a specific assessment point or receptor are primarily determined by its location.
- **'Specified below'** - you can use this to enter a single custom fNO<sub>2</sub> value in the field that appears below, which will be used in the NO<sub>x</sub> to NO<sub>2</sub> calculations.
- **'Use individual values'** - this option will use the individual fNO<sub>2</sub> values you enter for each custom assessment point in the 'Assessment points' screen for the (NO<sub>x</sub>) to (NO<sub>2</sub>) calculations.

[Return to top](#top)
