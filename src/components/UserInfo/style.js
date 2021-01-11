const styles = (theme) => ({
    text:{
        fontSize:'14px',
        lineHeight:'16px',
        letterSpacing:'1%',
        fontWeight:'500',
        textTransform:'capitalize',
        fontFamily:'Gilroy'
    },
    subtext:{
        fontWeight:'500',
        lineHeight:'14px',
        letterSpacing:'1%',
        textTransform:'capitalize',
        color: '#A6ACBE',
        fontSize:'12px',
        fontFamily:'Gilroy'
    },
    root:{
        margin:theme.spacing(5)
    },
    icon:{
        color:'#C9CED6',
        marginLeft:theme.spacing(-1)
    }
})

export default styles;