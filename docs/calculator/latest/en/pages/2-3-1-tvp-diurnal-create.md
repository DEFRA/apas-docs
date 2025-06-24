# Diurnal Time-varying profiles

Every emission source has an associated time-varying profile. The diurnal profile describes how the emissions from a source vary over the course of:
- a day (split into 24 hours)
- a week (split into Weekday, Saturday and Sunday)

Default diurnal profiles are assigned to each new emission source, depending on the sector the source is in.

There are two ways to create a new custom diurnal time-varying profile:
1. The 'Table' option allows you to enter values (known as 'hourly factors') for specific hours of the day and days of the week.
2. The 'Raw input' option allows you to provide the same information, by copying and pasting information from a comma-separated values (.csv) file or a table in an Excel (.xls or .xlsx) file. 

When using either option, the total hourly factors must equal 168, to match the number of hours in a week. When calculating this sum, each of the hourly factors entered in the 'Weekday avg' column is multiplied by 5, because there are 5 weekdays.

For further information about how time-varying profiles have been implemented in the service, please refer to the section on .fac files in the [ADMS Urban user guide](https://www.cerc.co.uk/environmental-software/assets/data/doc_userguides/CERC_ADMS-Urban5.0_User_Guide.pdf) (section 4.1.1 of the guide).
