# Sectors

A quick, possibly out of date, reference for content managers to map sectors to a emission_calculation_method

|emission_calculation_method|sector_id|description|sectorgroup|
|---------------------------|---------|-----------|-----------|
|GENERIC|2100|Other|energy|
|GENERIC|1900|Large combustion plant|energy|
|MEDIUM_COMBUSTION_PLANT|1910|Medium combustion plant|energy|
|GENERIC|1920|Specified generator|energy|
|MANURE_STORAGE|4120|Manure storage|agriculture|
|FARMLAND|4150|Farmland|agriculture|
|GENERIC|4320|Greenhouse horticulture|agriculture|
|GENERIC|4600|Fireplaces, other|agriculture|
|FARM_ANIMAL_HOUSING|4110|Animal housing|agriculture|
|FARMLAND|4400|Maturation, other|farmland|
|FARMLAND|4130|Grazing|farmland|
|FARMLAND|4140|Manure application|farmland|
|FARMLAND|4200|Firtelizer application|farmland|
|GENERIC|1050|Waste processing|industry|
|GENERIC|1100|Food and beverages|industry|
|GENERIC|1300|Chemical industry|industry|
|GENERIC|1400|Building materials|industry|
|GENERIC|1500|Basic metal|industry|
|GENERIC|1700|Metalworking industry|industry|
|GENERIC|1800|Other|industry|
|ADMS_ROAD|3100|Road|road_transportation|
|GENERIC|9999|Other...|other|

# Updating the above

To update the above table, ask a developer to run:

```sql
  SELECT
    emission_calculation_method,
    sector_id,
    i18n.sectors.description,
    sectorgroup
  FROM
    public.sectors
  INNER JOIN
    system.sectors_sectorgroup USING (sector_id)
  INNER JOIN
    system.sector_calculation_properties USING (sector_id)
  INNER JOIN
    i18n.sectors USING (sector_id)
  WHERE language_code::text LIKE 'en%'
  ORDER BY
    sectorgroup;
```
