import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import { useContext, useEffect, MouseEventHandler } from "react";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import { intlNumberFormat, numberFormat } from "../../utils/number-format";
import { useHistory } from "react-router-dom";
import { TransactionsWrapper } from "./styled";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../..";

const TransactionsTable = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions);

  const context = useContext(DashboardContext);
  const dashboardCryptoData = context?.dashboardData;

  const history = useHistory();

  const formContext = useContext(FormContext);

  /*   useEffect(() => {
    context?.getDashboardData();
  }, []); */

  const rows = transactions.map((transaction: any, index: number) => {
    /*    const lastUpdate = new Date(crypto?.last_updated); */

    return {
      id: index + 1,
      name: transaction.name,
      price: transaction.price,
      amount: transaction.amount,
      transactionType: transaction.transactionType,
      date: transaction.date,
    };
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      width: 40,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 180,
    },

    {
      field: "price",
      headerName: "Price",
      width: 180,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "transactionType",
      headerName: "Transaction type",
      width: 180,
    },
    {
      field: "date",
      headerName: "Date",
      width: 180,
    },
  ];

  return (
    <TransactionsWrapper>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        getRowClassName={(params) =>
          `transactions-${params.row.transactionType}`
        }
      />
    </TransactionsWrapper>
  );
};

export default TransactionsTable;
