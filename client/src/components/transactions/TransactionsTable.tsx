import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import DashboardContext from "../../state/DashboardContext";

import { intlNumberFormat } from "../../utils/number-format";

import { TransactionsWrapper } from "./styled";
import { useAppSelector } from "../../state/hooks";
import { RootState } from "../..";

import { DashboardCryptoItem, Transaction } from "../../common/modelTypes";
import { formatDate } from "../../utils/date-format";

const TransactionsTable = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions);

  const context = useContext(DashboardContext);

  const dashboardCryptoData = context?.dashboardData;

  const rows = transactions.map((transaction: Transaction, index: number) => {
    //Najdu crypto v contextu podle jména, abych dosadil ikonu
    const dashboardCrypto = dashboardCryptoData?.find(
      (crypto: DashboardCryptoItem) => crypto.name === transaction.name
    );

    const transactionDate = new Date(transaction.date);
    return {
      icon: dashboardCrypto?.imageURL,
      id: index + 1,
      name: transaction.name,
      price: intlNumberFormat(transaction.price, "usd"),
      amount: transaction.amount,
      transactionType: transaction.transactionType,
      date: formatDate(transactionDate),
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
      field: "icon",
      renderCell: (params) => {
        return <img src={params.row.icon} width="25px" height="25px" />;
      },
      headerName: "",
      width: 70,
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 130,
    },

    {
      field: "price",
      headerName: "Price per item",
      width: 145,
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
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
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
        sx={{
          "& .transactions-buy:hover": { backgroundColor: "#25b07b" },
          "& .transactions-sell:hover": { backgroundColor: "#ea3943" },
        }}
      />
    </TransactionsWrapper>
  );
};

export default TransactionsTable;
