---
id: '1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY'
title: 'Using DataVis Grids - Data Tools'
date: '2023-07-14T20:17:06.055Z'
version: 130
lastAuthor: 'sdrupa'
mimeType: 'text/x-markdown'
links: []
source: 'https://drive.google.com/open?id=1Ghj2RP8IERXm7OKIAoAj3YYh7sVV18xr5-Nf3UzBxHY'
wikigdrive: 'dd69069d725fca5f553df7ded62e130a49d49ca6'
---
*The actual grid you use may differ slightly in appearance from the examples below. Some grids may be configured specifically to disallow certain features.*

## Plain Output

The grid starts with "plain output" which shows the raw data. This is useful for examining all the details, and allows you to sort and filter.

![](../using-datavis-grids-data-tools.assets/05c43f905aecde83975b4bd12adc7d92.png)

*initial view of the grid*

1. Show/hide the whole grid.
2. Use the <strong>gear icon</strong> to show/hide the grid controls (where you can set the filter, group, pivot, and aggregate functions: see following screenshots).
3. Select (or deselect) all visible rows. If the data has been filtered, then only the filtered rows will be selected/unselected.
4. Click the double-arrow icon to show a menu that allows sorting the data.
5. Click the filter icon to add a filter for the column.
6. The <strong>view toolbar section</strong> — use the back/forward arrows to navigate view history, the dropdown to select a view, and the undo button to reset all views.
7. The <strong>limit toolbar section</strong> — initially, only the first 500 rows are shown. More will be shown as you scroll down; the checkbox can be used to turn that behavior on/off. The "Show All Rows" button will immediately show all rows, without having to scroll down repeatedly.

![](../using-datavis-grids-data-tools.assets/9b7ec4290cb1e8a4ee5cc6eafa8bb7ee.png)

*after clicking the gear icon to show the grid controls*

1. The <strong>filter control</strong> — here we have filtered by Order ID. To add more filters, select the column name from the dropdown and click the "+" button, or drag the column header into the control, or click the filter icon in the column header. Use the "–" button next to each filter to remove it.
2. The <strong>group control</strong> — allows you to group the data by the value of certain columns. To group by a column, select the column name from the dropdown and click the "+" button, or drag the column header into the control.

### Other Features

* The <strong>refresh button</strong> forces the grid to fetch a new copy of the data.
* The <strong>export button</strong> lets you download a CSV file of the data <em>as it appears in the grid</em>. This works the same in plain, group, and pivot outputs.

## Group Output

![](../using-datavis-grids-data-tools.assets/0213863c2425a3b6cda34eb0ff097810.png)

*after grouping by Product*

1. Click the "+" or "–" button to expand/collapse the rows that belong to that group.
2. The <strong>group mode toolbar section</strong> — "summary" mode shows only the group and the result of the aggregate function. "Detail" mode shows all the rows that go into each group.

## Pivot Output

![](../using-datavis-grids-data-tools.assets/50e1c664967399bbc1836dda8d3f7ff6.png)

*after adding Category to the group, and pivoting by Country*

1. The <strong>filter control</strong> — here we have added a filter for Country. To add more filters, select the column name from the dropdown and click the "+" button.
2. The <strong>group control</strong> — here we're grouping first by Category, then by Product. You can drag & drop these fields to reorder them. To add more columns to the grouping, select the column name from the dropdown and click the "+" button. To remove a column, use the "–" button next to the column name.
3. The <strong>pivot control</strong> — we are pivoting by Country in this example. Like the group control, these fields can be reordered; to pivot by additional columns, select them from the dropdown and click the "+" button. To remove a column, use the "–" button next to the column name.
4. The <strong>aggregate control</strong> — in this example, we are calculating the count (number of matching rows) and the sum of the Amount column. Some aggregate functions operate on fields (e.g. sum), whereas others do not (e.g. count). Like the other controls, to add a new aggregate function, select it from the dropdown and click the "+" button. To remove an aggregate function, click the "–" button next to the function name.
5. Show/hide total rows and columns.

## Drill Down

You can double-click a cell in the group output (summary mode) or pivot output to "drill down" and see all the rows from the data that contribute to the value of that cell. This works by adding a new view called "Drill Down" with filters to show only the contributing rows. The "Drill Down" view will not be saved, so reloading the page will cause the grid to load the previous view.

{{% note %}}
Filters you are already using still apply, if they don't conflict with the drill down filters (in this case, the Order ID filter applies, but the Country filter does not).
{{% /note %}}

![](../using-datavis-grids-data-tools.assets/0b70be7a43eb324a7701cc7f418b6fb9.png)

*after drilling down into Germany's banana orders*

Click the **view history back arrow** in the **view toolbar section** to go back to the previous view.
