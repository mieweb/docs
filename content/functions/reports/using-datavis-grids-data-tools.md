---
id: '1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY'
title: 'Using DataVis Grids - Data Tools'
date: '2025-07-17T14:30:45.295Z'
version: 335
lastAuthor: 'janderson'
mimeType: 'text/x-markdown'
links:
  - 'https://mie.talentlms.com/shared/start/key:ALBHRKMF'
source: 'https://drive.google.com/open?id=1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY'
wikigdrive: 'v2.15.30'
---
The actual grid you use may differ slightly in appearance from the examples below. Some grids may be configured specifically to disallow certain features.

## Plain Output

The grid starts with "plain output" which shows the raw data. This is useful for examining all the details, and allows you to sort and filter.

![](./using-datavis-grids-data-tools.assets/6dfa4c1b9854c7972d00445722bd1e3b.png)

*initial view of the grid*

1. Show/hide the whole grid.
2. Use the <strong>gear icon</strong> to show/hide the grid controls (where you can set the filter, group, pivot, and aggregate functions: see following screenshots).
3. Select (or deselect) all visible rows. If the data has been filtered, then only the filtered rows will be selected/unselected.
4. Click the double-arrow icon to show a menu that allows sorting the data.
5. Click the filter icon to add a filter for the column.
6. The <strong>view toolbar section</strong> — use the back/forward arrows to navigate view history, the dropdown to select a view, and the undo button to reset all views.

![](./using-datavis-grids-data-tools.assets/12612183705c72c94adc89044628f600.png)

*after clicking the gear icon to show the grid controls*

1. The <strong>filter control</strong> — here we have filtered by Appt ID. To add more filters, select the column name from the dropdown and click the "+" button, or drag the column header into the control, or click the filter icon in the column header. Use the "–" button next to each filter to remove it.
2. The <strong>group control</strong> — allows you to group the data by the value of certain columns. To group by a column, select the column name from the dropdown and click the "+" button, or drag the column header into the control.

### Other Features

* The <strong>refresh button</strong> forces the grid to fetch a new copy of the data.
* The <strong>export button</strong> lets you download a CSV file of the data <em>as it appears in the grid</em>. This works the same in plain, group, and pivot outputs.

## Group Output

![](./using-datavis-grids-data-tools.assets/e8a94e6ad248d2edbf69933bed63e731.png)

*after grouping by Product*

1. Click the "+" or "–" button to expand/collapse the rows that belong to that group.
2. The <strong>group mode toolbar section</strong> — "summary" mode shows only the group and the result of the aggregate function. "Detail" mode shows all the rows that go into each group.

![](./using-datavis-grids-data-tools.assets/db83a3a1eadc53d2a6739bb17f5d93b0.png)

3. With the "Detail" radio button selected, when the "<strong>Expand All Groups</strong>" button is also selected the grouping of each chart now defaults in an expanded view to display each line item of data.

![](./using-datavis-grids-data-tools.assets/257871816e0287d2e4068ea6fe086b86.png)

4. With the "Summary" radio button selected, the "Total Row" button can be selected to display a total of the data

## Pivot Output

![](./using-datavis-grids-data-tools.assets/9b4fbd8264ac7055199f69d00f20b4b0.png)

*after adding Resource to the group, and pivoting by Location*

1. The <strong>filter control</strong> — To add filters, select the column name from the dropdown and click the "+" button.
2. The <strong>group control</strong> — here we're grouping by Resource. You can drag & drop these fields to reorder them. To add more columns to the grouping, select the column name from the dropdown and click the "+" button. To remove a column, use the "–" button next to the column name.
3. The <strong>pivot control</strong> — we are pivoting by Location in this example. Like the group control, these fields can be reordered; to pivot by additional columns, select them from the dropdown and click the "+" button. To remove a column, use the "–" button next to the column name.
4. The <strong>aggregate control</strong> — in this example, we are calculating the count (number of matching rows). Some aggregate functions operate on fields (e.g. sum), whereas others do not (e.g. count). Like the other controls, to add a new aggregate function, select it from the dropdown and click the "+" button. To remove an aggregate function, click the "–" button next to the function name.
5. Show/hide total rows and columns.

## Drill Down

You can double-click a cell in the group output (summary mode) or pivot output to "drill down" and see all the rows from the data that contribute to the value of that cell. This works by adding a new view called "Drill Down" with filters to show only the contributing rows. The "Drill Down" view will not be saved, so reloading the page will cause the grid to load the previous view.

{{% note %}}
Filters you are already using still apply, if they don't conflict with the drill down filters.
{{% /note %}}

![](./using-datavis-grids-data-tools.assets/245af1cc149068effd90ce77b7eadbd2.png)

*after drilling down into the Resource Selenium, Selenium*

Click the **view history back arrow** in the **view toolbar section** to go back to the previous view.

## Embedded Formatting Strings

Datavis reports can be updated to apply formatting to various cells. For example, reports can be updated with embedded formatting strings which will highlight test results that fall outside of a normal range.

![](./using-datavis-grids-data-tools.assets/a60dc069debd74b74ced4fc81112762e.png)

Data values that contain embedded formatting strings can be rendered when the column configuration allows it. The formatting strings have the following format:

{{dv.fmt:<SPECS>}}text{{/}}

where <SPECS> is a comma-separated list of format specifiers:

* bg=HHHHHH sets the background color to the RGB hex color
* fg=HHHHHH sets the foreground color to the RGB hex color
* ts=X sets the text style as specified, with any of the following letters supported:
* b for bold
* i for italic
* s for strike-through
* u for underline
* cls=C sets CSS class(es) for the HTML element; multiple classes can be separated by spaces, or use several cls formatters.

![](./using-datavis-grids-data-tools.assets/3cff2fbb858e1e9c3017bf49076635be.png)

**WARNING:** Because formatting strings are part of the value, they affect the ordering of data when grouping, sorting, and computing aggregate functions. They will also appear in the dropdown when filtering, and will cause numeric values to be treated as strings. These limitations may be addressed in future updates.

### Column Configuration

The property to allow formatting is *allowFormatting* and it can be accessed by an end user via the COLUMNS selection button within a datavis, where it is represented by the paintbrush icon per column.

![](./using-datavis-grids-data-tools.assets/1d87ee7cb206588503860dca9d51e293.png)

## Placement of DataVis Controls

For systems on RC202403 or newer, the perspective controls have been moved into the grid titlebar so it always remains accessible. The toolbar in the Datavis grid will now be hidden by default, but can be shown by clicking the gears icon in the top right corner of the grid.

View of DataVis in RC202403 and newer:

![](./using-datavis-grids-data-tools.assets/1624b33b4fd70d20ceda3b99482a95f3.png)

![](./using-datavis-grids-data-tools.assets/7159d7b2a3c08f99670cc9e55d7c6860.png)

Legacy view prior to RC202403:

![](./using-datavis-grids-data-tools.assets/31f3b94c783da50b2f7505ccb59d2ce3.png)

## Learning Management System

To learn more about Using DataVis Grids - Data Tools, follow the link below to the Learning Management System course:

* [Reports](https://mie.talentlms.com/shared/start/key:ALBHRKMF) 206.A (70 minutes)
