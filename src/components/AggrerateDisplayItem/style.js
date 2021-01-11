const styles = (theme) => ({
    container:{
        marginRight:theme.spacing(3)
    },
    root:{
        padding:theme.spacing(5),
        
    },
    person:{
        backgroundColor:'rgba(113,59,219,0.05)',
        marginRight:theme.spacing(2)
    },
    chart:{
        backgroundColor:'rgba(51,214,159,0.05)',
        marginRight:theme.spacing(1)
    },
    text:{
        fontFamily:'Gilroy',
        fontWeight:'600',
        fontSize:'28px',
        lineHeight:'24px',
        letterSpacing:'1%'
    },
    line:{
        fontFamily:'Gilroy',
        fontSize:'20px',
        lineHeight:'24px',
        letterSpacing:'1%',
        color:'#A6ACBE'
    },
    subtext:{
        fontFamily:'Gilroy',
        fontSize:'14px',
        lineHeight:'16px',
        color:'#A6ACBE',
        letterSpacing:'1%',
        marginTop:theme.spacing(1)
    }
})

export default styles;