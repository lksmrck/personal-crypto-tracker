import React, {useState} from 'react'
import { FormControl, Select, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material'

export default function CryptoSelect() {

const [selectedCrypto, setSelectedCrypto] = useState("")

const selectCryptoHandler = (e: SelectChangeEvent<unknown>) => {
    setSelectedCrypto(e.target.value as string)
}



  return (
    <div>
 <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
            size="small"
          >
            <InputLabel id="sort-select">Sort by:</InputLabel>
            <Select
              labelId="sort-select"
              id="sort-select"
              label="Sort by:"
              value={selectedCrypto}
              onChange={selectCryptoHandler}
            >
        {/* Sem dát map function na API call nebo na listing crypta */}
              <MenuItem value="Bitcoin">Date newest</MenuItem>
              <MenuItem value="Ethereum">Date oldest</MenuItem>
              <MenuItem value="Polkadot">Rating highest</MenuItem>
              <MenuItem value="Cardano">Rating lowest</MenuItem>
            </Select>
          </FormControl>

    </div>
  )
}
