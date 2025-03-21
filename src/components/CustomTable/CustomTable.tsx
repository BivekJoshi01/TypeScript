import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useCallback } from "react";

interface CustomTableProps<TData> {
  columns: MRT_ColumnDef<TData>[];
  data: TData[];
  title?: string;
  enableRowNumbers?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  enableEditing?: boolean;
  editingMode?: "modal" | "row" | "cell";
  rowCount?: number;
  isLoading?: boolean;
  density?: "compact" | "comfortable" | "spacious";
  filter?: boolean;
  enableColumnResizing?: boolean;
  enableColumnActions?: boolean;
  enableColumnFilters?: boolean;
  enableSorting?: boolean;
  enableRowActions?: boolean;
  showColumnFilters?: boolean;
  enableBottomToolbar?: boolean;
  enableTopToolbar?: boolean;
  enableDensityToggle?: boolean;
  enableHiding?: boolean;
  enableFullScreenToggle?: boolean;
  enableGlobalFilter?: boolean;
  headColor?: string;
  onRowClick?: (row: any) => void;
  handleEnter?: (row: any) => void;
  handleGenerate?: (row: any) => void;
  handleAddDocumentRow?: (row: any) => void;
  handleDeleteRow?: (row: any) => void;
  handleEdit?: (row: any) => void;
  edit?: boolean;
}

const CustomTable = <TData,>({ ...props }: CustomTableProps<TData>) => {
  const handleRowClick = (row: any) => {
    if (props.onRowClick) {
      props.onRowClick(row);
    }
  };

  const handleEnter = useCallback((row: any) => {
    props.handleEnter?.(row);
  }, [props.handleEnter]);

  const handleGenerate = useCallback((row: any) => {
    props.handleGenerate?.(row);
  }, [props.handleGenerate]);

  const handleAddDocumentRow = useCallback((row: any) => {
    props.handleAddDocumentRow?.(row);
  }, [props.handleAddDocumentRow]);

  const handleDeleteRow = useCallback((row: any) => {
    props.handleDeleteRow?.(row);
  }, [props.handleDeleteRow]);

  const handleEditRow = useCallback((row: any) => {
    if (props.edit && props.handleEdit) props.handleEdit(row);
  }, [props.edit, props.handleEdit]);

  const bodyBackgroundColor = "#ffff";

  return (
    <div className="custom_table">
      <MaterialReactTable<TData>
        columns={props.columns.map((col) => ({
          ...col,
          size: col.size || 170,
          flex: col.flex || 1,
        }))}
        data={props.data || []}
        isLoading={props.isLoading ?? true}
        enableRowNumbers={props.enableRowNumbers ?? false}
        enableRowVirtualization
        enableStickyHeader
        enablePagination={props.enablePagination ?? false}
        paginationPageSize={props.pageSize ?? 10}
        enableEditing={props.enableEditing ?? false}
        editingMode={props.editingMode}
        rowCount={props.rowCount}
        state={{
          isLoading: props.isLoading,
        }}
        initialState={{
          density: props.density || "compact",
          showColumnFilters: props.filter || false,
          columnPinning: {
            right: ["mrt-row-actions"],
          },
        }}
        enableColumnResizing={props.enableColumnResizing ?? true}
        enableColumnActions={props.enableColumnActions}
        enableColumnFilters={props.enableColumnFilters}
        enableSorting={props.enableSorting}
        enableRowActions={props.enableRowActions ?? false}
        showColumnFilters={props.showColumnFilters ?? false}
        enableBottomToolbar={props.enableBottomToolbar}
        enableTopToolbar={props.enableTopToolbar}
        enableDensityToggle={props.enableDensityToggle}
        enableHiding={props.enableHiding}
        enableFullScreenToggle={props.enableFullScreenToggle}
        enableGlobalFilter={props.enableGlobalFilter}
        density={props.density}
        renderRowActions={() => <></>}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor: "#8E51FF",
            height: props.filter ? "70px" : "40px",
          },
        }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => handleRowClick(row),
          sx: {
            cursor: "pointer",
            backgroundColor: bodyBackgroundColor,
          },
        })}
        muiTableHeadCellProps={{
          sx: {
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default CustomTable;
