import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import DashboardContext from "../../state/DashboardContext";
import FormContext from "../../state/FormContext";
import { intlNumberFormat, numberFormat } from "../../utils/number-format";
import { useHistory } from "react-router-dom";
import { DashboardWrapper } from "./styled";
import { DashboardCryptoItem } from "../../common/modelTypes";

const DashboardTable: React.FC = () => {
  const dashboardContext = useContext(DashboardContext);
  const formContext = useContext(FormContext);

  const dashboardCryptoData = dashboardContext?.dashboardData;

  const history = useHistory();

  const rows: any = dashboardCryptoData?.map(
    (crypto: DashboardCryptoItem, index: number) => {
      const lastUpdate = new Date(crypto?.last_updated);

      return {
        id: index + 1,
        identifier: crypto.name,
        icon: crypto.imageURL,
        name: crypto.name,
        ticker: crypto.ticker.toUpperCase(),
        price: intlNumberFormat(crypto.current_price, "usd"),
        marketCap: "$" + numberFormat(crypto.market_cap),
        priceChangeNumber: crypto.price_change_24h,
        priceChange: intlNumberFormat(crypto.price_change_24h, "usd"),
        priceChangePercentage:
          crypto.price_change_percentage_24h.toFixed(2) + "%",
        allTimeHigh: intlNumberFormat(crypto.allTimeHigh, "usd"),
        lastUpdate: lastUpdate.toLocaleTimeString(),
      };
    }
  );

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      width: 20,
      align: "center",
      headerAlign: "center",
      cellClassName: "default",
    },
    {
      field: "icon",
      renderCell: (params) => {
        return (
          <img alt="icon" src={params.row.icon} width="25px" height="25px" />
        );
      },
      headerName: "",
      width: 30,
      cellClassName: "default",
    },
    {
      field: "ticker",
      headerName: "",
      width: 70,
      cellClassName: "coin-ticker",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      cellClassName: "coin-name",
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,
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
      cellClassName: "default",
    },
    {
      field: "priceChange",
      headerName: "24h change",
      width: 115,
      headerAlign: "right",
      align: "right",
      cellClassName: (params) =>
        params.row.priceChangeNumber > 0
          ? "positive-change"
          : "negative-change",
    },
    {
      field: "priceChangePercentage",
      headerName: "24h change %",
      width: 115,
      headerAlign: "right",
      align: "right",
      cellClassName: (params) =>
        params.row.priceChangeNumber > 0
          ? "positive-change"
          : "negative-change",
    },
    {
      field: "allTimeHigh",
      headerName: "All time high",
      width: 120,
      headerAlign: "right",
      align: "right",
      cellClassName: "default",
    },
    {
      field: "lastUpdate",
      headerName: "Last updated",
      width: 130,
      headerAlign: "right",
      align: "right",
      cellClassName: "default",
    },
  ];

  const handleRowClick = (params: any): any => {
    formContext?.setSelectedCrypto(params.row.identifier);
    formContext?.setFormShown(true);
    history.push("/holdings");
  };

  return (
    <DashboardWrapper>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        density={"comfortable"}
        disableSelectionOnClick
        onRowClick={handleRowClick}
      />
    </DashboardWrapper>
  );
};

export default DashboardTable;
