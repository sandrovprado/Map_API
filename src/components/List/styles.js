import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) =>({
    formControl: {
        marginTop: '10px',
        marginBottom: '30px',
        marginLeft: '5px',
        minWidth: '150px', 
        
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      loading: {
        height: '600px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      },
      container: {
        padding: '25px',
      },
      marginBottom: {
        marginBottom: '30px',
      },
      list: {
        height: '75vh', 
        overflow: 'auto',
      },

}));