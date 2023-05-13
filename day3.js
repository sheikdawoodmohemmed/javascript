function data()
{
    let basic=document.getElementById("basic").value;
    let allowens=document.getElementById("allowens").value=basic*(10/100);
    let hra=document.getElementById("hra").value=basic*(10/100);
    let ConvAll=document.getElementById("conv_all").value=basic*(10/100);
    let sp=document.getElementById("sp").value=basic*(10/100);
    let pf=document.getElementById("pf").value=basic*(10/100);
    let esi=document.getElementById("esi").value=basic*(10/100);
    
    basic=parseInt(basic);
    allowens=parseInt(allowens);
    hra=parseInt(hra);
    ConvAll=parseInt(ConvAll);
    sp=parseInt(sp);
    pf=parseInt(pf);
    esi=parseInt(esi);
    
    let total=document.getElementById("total").value=(basic+allowens+hra+ConvAll-sp-pf-esi);
}