import {createTheme} from "@mui/material/styles";

const theme= createTheme(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(100,0,2, 1)',
      },
      
}))

export default theme;