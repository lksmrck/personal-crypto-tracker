import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import { useState, useContext, useEffect, MouseEventHandler } from "react";
import { DashboardCryptoItem } from "../../common/modelTypes";
import { StyledDashboardItem } from "./styled";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import { firstLetterCapitalized } from "../../utils/text-format";
import { intlNumberFormat, numberFormat } from "../../utils/number-format";
import { GrTransaction } from "react-icons/gr";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { DashboardWrapper } from "./styled";

export default function DashboardMUI() {
  const context = useContext(DashboardContext);
  const dashboardCryptoData = context?.dashboardData;

  const history = useHistory();

  const formContext = useContext(FormContext);

  useEffect(() => {
    context?.getDashboardData();
  }, []);

  const rows = dashboardCryptoData.map((crypto: any, index: number) => {
    const lastUpdate = new Date(crypto?.last_updated);

    return {
      id: index + 1,
      icon: crypto.imageURL,
      name: crypto.ofiName,
      ticker: crypto.ticker.toUpperCase(),
      price: intlNumberFormat(crypto.current_price, "usd"),
      marketCap: "$" + numberFormat(crypto.market_cap),
      priceChangeNumber: crypto.price_change_percentage_24h,
      priceChange: crypto.price_change_percentage_24h.toFixed(2) + "%",
      lastUpdate: lastUpdate.toLocaleTimeString(),
    };
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "icon",
      renderCell: (params) => {
        return <img src={params.row.icon} width="25px" height="25px" />;
      },
      headerName: "",
      width: 60,
    },
    {
      field: "ticker",
      headerName: "Ticker",
      width: 70,
      cellClassName: "coin-ticker",
    },
    {
      field: "name",
      headerName: "Name",
      width: 160,
      cellClassName: "coin-name",
    },

    {
      field: "price",
      headerName: "Price",
      width: 130,
      headerAlign: "right",
      align: "right",
      cellClassName: "coin-price",
    },
    {
      field: "marketCap",
      headerName: "Market Cap",
      width: 170,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "priceChange",
      headerName: "24h change",
      width: 160,
      headerAlign: "right",
      align: "right",
      cellClassName: (params) =>
        params.row.priceChangeNumber > 0
          ? "positive-change"
          : "negative-change",
    },
    {
      field: "lastUpdate",
      headerName: "Last updated",
      width: 150,
      headerAlign: "right",
      align: "right",
    },
  ];

  /*   const dashboardItemClickHandler = (crypto: any): any => {
    formContext?.setSelectedCrypto(crypto);
    formContext?.setFormShown(true);
    history.push("/holdings");
  }; */

  return (
    <DashboardWrapper>
      <DataGrid
        rows={rows}
        columns={columns}
        /*  pageSize={5}
        rowsPerPageOptions={[5]} */
        autoHeight
        density={"comfortable"}
        disableSelectionOnClick
      />
    </DashboardWrapper>
  );
}
