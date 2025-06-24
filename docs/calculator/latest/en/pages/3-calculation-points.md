<div id='top'></div>

# Assessment points

- [Custom assessment points](#section1)
    - [New assessment point](#section1a)
    - [Determine automatically](#section1b)

A default calculation in the service will include results for all designated nature conservation sites within the zone of influence around the emission sources. This includes mapped datasets for:
- Special Areas of Conservation (SACs)
- Special Protection Areas (SPAs)
- Sites of Special Scientific Interest (SSSIs)
- Areas of Special Scientific Interest (ASSIs)

You can also add your own assessment points (sometimes referred to as 'receptors' or 'calculation points').

The service calculates the default results at a minimum resolution of 4 hectares (ha) (approximately 200m x 200m) across the entire portion of the protected sites within the zone of influence around the emission sources. It will calculate results at higher resolutions depending on how close the nature site is to an emission source. In most cases, you will not need to manually add assessment points within a designated site.

The service does not automatically save your entered data. You can export you input data to save your work in a format that can later be reimported, for example if you need to make amendments or further calculations.

<div id='section1'></div>

## Custom assessment points

In some cases adding custom assessment points is useful, for example:
- to obtain a quick calculation result by defining a small number of assessment points - this approach can be used to sense-check the results before running a full calculation
- to obtain calculation results outside of a designated site, for example to compare calculated results with monitoring data
- to obtain calculation results for an ecological site that is not already loaded into the service, for example ancient woodlands or local wildlife sites

You can add custom assessment points to your scenario by creating new assessment points, or by importing them on the home screen.

There are 2 options for creating new assessment points:
- New assessment point allows you to manually place custom assessment points
- Determine automatically will automatically place custom assessment points based on information you enter

<div id='section1a'></div>

### New assessment point

When using the 'New assessment point' option, you can manually place custom assessment points by clicking on the map or entering coordinate information directly. Under the 'Point characteristics' heading, you can add custom heights and assign the points to a category (ecology, human health, monitoring or none).

The method used to convert concentrations of oxides of nitrogen (NO<sub>x</sub>) to nitrogen dioxide (NO<sub>2</sub>) also depends on the sector group:
- for the road transport sector group, the service uses the Defra NO<sub>x</sub> to NO<sub>2</sub> calculator
- for all other sector groups, NO<sub>x</sub> concentrations are multiplied by 0.7 to convert to NO<sub>2</sub> concentrations, based on the Environment Agency's recommendation of assuming 70% conversion for assessments based on annual averages

You can specify a 'Custom primary NO<sub>2</sub> fraction (fNO<sub>2</sub>)' for each custom assessment point. This field is optional and can be left blank. Only expert users should edit this.

You can also assign a specific habitat or species to a new assessment point by including specific critical levels and loads. To include the specified critical levels and loads, tick the boxes next to your inputted values.

<div id='section1b'></div>

### Determine automatically

When using the 'Determine automatically' option, you must define a radius (up to 15,000 m) and select a scenario. It will then check for designated nature conservation sites located within the specified radius of the emission sources in the selected scenario.

For each combination of nature area and habitat or species that is sensitive to nitrogen, an assessment point will be identified. This will correspond to the shortest distance between that nature area and the emission sources in the selected scenario. Each assessment point must have a unique location. If there are multiple habitats or species covering the same geographical extents within a particular nature area, a single assessment point will be created to represent all of these habitats or species.

This option differs from the default resolution of results because it places only one assessment point for each combination of nature area and habitat or species. The default results will produce assessment points spanning the extent of a nature conservation area. The 'Determine automatically' option is useful for getting a quick overview of the range of results at nearby nature conservation areas before running a full calculation.

Click add to add these automatic assessment points to your scenario and to display them as a list.

[Return to top](#top)
