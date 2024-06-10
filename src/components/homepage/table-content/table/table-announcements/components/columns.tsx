"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import { labels, priorities, statuses } from "../data/data";
import { Announcement } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Button } from "@/components/ui/button";
// import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Announcement>[] = [
  {
    id: "stt",
    header: () => <div className="text-center">STT</div>,
    cell: ({ row }) => (
      <div className="text-center">{parseInt(row.id) + 1}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "bien_so",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Biển số" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("bien_so")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "gia_dau_gia",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Giá khởi điểm" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.gia_dau_gia);
      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("gia_dau_gia")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "tinh",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tỉnh, Thành phố" />
    ),
    cell: ({ row }) => <div>{row.getValue("tinh")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "loai_xe",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Loại xe" />
    ),
    cell: ({ row }) => <div>{row.getValue("loai_xe")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "loai_bien",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Loại xe" />
    ),
    cell: ({ row }) => <div>{row.getValue("loai_bien")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       (status) => status.value === row.getValue("status")
  //     );

  //     if (!status) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         {status.icon && (
  //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{status.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // {
  //   accessorKey: "priority",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Priority" />
  //   ),
  //   cell: ({ row }) => {
  //     const priority = priorities.find(
  //       (priority) => priority.value === row.getValue("priority")
  //     );

  //     if (!priority) {
  //       return null;
  //     }

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{priority.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    id: "actions",
    cell: () => <a className="text-green-700 font-bold" href="https://dgbs.vpa.com.vn/">Đăng ký</a>,
  },
];
