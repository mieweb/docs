---
title: "Chart Observations Default Values"
date: "2020-02-27T21:04:46.860Z"
url: "general-functionality/system-administration/data-migration/chart-observations-default-values.html"
version: 13
id: "1pWG1xFZ_-nRK864dudkGxbyLgAzlfHPsdu2clCou-mM"
source: "https://drive.google.com/open?id=1pWG1xFZ_-nRK864dudkGxbyLgAzlfHPsdu2clCou-mM"
menu:
    main:
        name: "Chart Observations Default Values"
        identifier: "1pWG1xFZ_-nRK864dudkGxbyLgAzlfHPsdu2clCou-mM"
        parent: "1uT8WLYj42KO6Q0YgNCoxLH8RikMH_C6IBQjUmhLSaWU"
        weight: 5130
---
## What we mean by "default"

When importing a file of observations, each observation needs to have a column for the observed date, user_id, etc. An example can be found in the [Example 1 spceifying metadata for every obs result](https://docs.google.com/spreadsheets/d/1m09kcigKY1wYOJzEIdMDj6zS5IP5Me2_L-xK_53aFMY/edit#gid=1502636095) tab of this example. Using default values, we can specify some of these fields in one column without needing to specify them for every observation. This way, we can drastically reduce the size of the file. An example of how the file is condensed can be found in the [Example 1 using default metadata](https://docs.google.com/spreadsheets/d/1m09kcigKY1wYOJzEIdMDj6zS5IP5Me2_L-xK_53aFMY/edit#gid=2105581120) tab.



## Default observation format

Using the wildcard in the header will tell the import to use that column as the default. If column has a default value set, then that value will be substituted in for any observations that don't have a value set for it.

Example:



{{% pre %}}

` @obs.*.observed_datetime 
`
{{% /pre %}}


` 
`
`
`
This format will tell the import that any values in this column can be applied to any of the observations in the file.

