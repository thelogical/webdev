function AddValues()
{
    document.getElementById("add").style.display = "table-row";
    document.getElementById("adding").style.display = "none";
    document.getElementById("Input").style.display = "block";
    document.getElementById("update").style.display = "none";
}

function Check_unique(table,data,i)
{
    if(i != 6 && i != 2)
    {
        return false;
    }
    var l = table.rows.length;
    var p = 0;
    for(p = 0;p < l - 1;p++)
    {
        if(table.rows[p].cells[i-2].innerHTML == data)
            return true;
    }
    return false;

}

function Delete(obj)
{
    table = document.getElementById("C_details");
    var l = table.rows.length;
    var i = 0,j = 0,row;
    for(i = 0;i < l; i++)
    {
        row = table.rows[i];
        for(j = 0;j < 7; j++)
        {
            if(obj == row.cells[j])
            {
                row.style.color = "red";
                i = l+1;
                break;

            }
        }

    }
}


function edit(obj)
{

    obj.onmousedown = function () {
      start = +new Date();
    };


    obj.onmouseup = function () {
      end = +new Date();

      dif = end - start; 
      if(dif > 300)
      {
        Delete(obj);
      }
      else
      {
        editz(obj);
      }
    };
}

function editz(obj)
{
    var x = obj.cellIndex;
    var old = obj.innerHTML;
    new_v = prompt("Enter new data","here");
    if(new_v == null)
    {
        return ;
    }
    obj.innerHTML = "-1";
    if(x == 0 && new_v == "")
    {
        while(new_v == "")
        {
            new_v = prompt("Cannot be empty!","here");
        }
    }
    while(Check_unique(document.getElementById("C_details"),new_v,x))
    {
        new_v = prompt("data must be unique for this field","");
    }
    obj.innerHTML = new_v;
    if(new_v == old)
    {
        //do nothing
    }
    else
    {
        obj.style.color = "blue";
    } 
}


function Input()
{    
    var arr = new Array(7);
    document.getElementById("add").style.display = "none";
    document.getElementById("adding").style.display = "block";
    document.getElementById("Input").style.display = "none";
    document.getElementById("update").style.display = "block";
    var x = document.getElementsByTagName("INPUT");
    var i = 0;
    var table = document.getElementById("C_details");
    for(i = 2 ; i < x.length - 2 && x[i].style.display != "none"; i++)
    {
        if(i==2)
        {
            if(x[2].value == "" || x[2].value == null)
            {
                alert("Contract Name cannot be empty");
                return ;
            }
            if(Check_unique(table, x[2].value , 2))
            {
                alert("Contract Name must be unique");
                return ;
            }
        }
        if(i==6)
        {
            if(Check_unique( table , x[6].value , 6))
            {
                alert("Bank Guarantee number must be unique!");
                return ;
            }
        }
        arr[i-2] = x[i].value;
    }
    for(i = 2 ; i < x.length ; i++)
    {
        x[i].value = "";
    }
    var pos = table.rows.length;
    var new_row = table.insertRow(pos-1);
    var Cells = new Array(7);
     
    for(i = 0; i < 7; i++)
    {
        Cells[i] = new_row.insertCell(i);
        Cells[i].innerHTML = arr[i];
        Cells[i].style.color = "green"; 
        Cells[i].onclick = function () {
            edit(this);
                                       };
    }
    table.refresh();       

}



function Update()
{
    var heads = new Array(7);
    heads[0] = "Contract_Name";
    heads[1] = "Vendor_Name";
    heads[2] = "Vendor_Address"
    heads[3] = "Vendor_Phone";
    heads[4] = "Bank_Guarantee_No";
    heads[5] = "Expiry_Date";
    heads[6] = "Value_Of_Contract";
    var table = document.getElementById("C_details");
    var Row;
    var data_values = new Array(7);
    var i = 0,j = 0;
    for(i = 0; i < table.rows.length; i++)
    {
        Row = table.rows[i];
        if(Row.cells[1].style.color == "green")
        {
            for(j = 0; j<7; j++)
            {
                data_values[j] = "'"+Row.cells[j].innerHTML+"'";
                Row.cells[j].style.color = "black";
            }
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                //alert(this.responseText);
            }
                                                    };
            xmlhttp.open("GET", "commit.php?data=" + data_values, true);
            xmlhttp.send();

            continue;
        }

        if(Row.style.color == "red")
        {
            var contract = Row.cells[0].innerHTML;
            Req = new XMLHttpRequest();
            Req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                a//lert(this.responseText);
            }
                                                        };
            Req.open("GET","delete.php?c=" + contract, true);
            Req.send();

        }

        for(j = 0; j<7; j++)
        {
            if(Row.cells[j].style.color == "blue")
            {
                req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) 
                {
                    //alert(this.responseText);
                }
                                                        };
                req.open("GET","commit2.php?q=" + heads[j] + "&r=" + Row.cells[j].innerHTML + "&s=" + Row.cells[0].innerHTML, true);
                req.send();
                Row.cells[j].style.color = "black"; 
            }
        }


    }
}


function Load(obj)
{
    var no = document.getElementById(obj).value;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert(this.responseText);
                if(document.getElementById("Contracts_show").style.backgroundColor == "rgb(242,242,242")
                {
                    sessionStorage.setItem("ID1", "Contracts");
                    sessionStorage.setItem("ID2", "Contracts_show");
                }
                else
                {
                    sessionStorage.setItem("ID1", "Payments");
                    sessionStorage.setItem("ID2", "Payments_show");
                }
                location.reload();
            }
        };
        xmlhttp.open("GET", "set.php?No=" + no, true);
        xmlhttp.send();
}

function setnext(val)
{
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert(this.responseText);
                sessionStorage.setItem("ID1", "Contracts");
                sessionStorage.setItem("ID2", "Contracts_show");
                location.reload();
            }
        };
        xmlhttp.open("GET", "setnext.php?End=" + val, true);
        xmlhttp.send();
}

function setprev(val)
{
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert(this.responseText);
                sessionStorage.setItem("ID1", "Contracts");
                sessionStorage.setItem("ID2", "Contracts_show");
                location.reload();
            }
        };
        xmlhttp.open("GET", "setprev.php?No=" + val, true);
        xmlhttp.send();
}

function Find(obj)
{
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                var myres = JSON.parse(this.responseText);
                var table = document.getElementById("C_details");
                var pos = table.rows.length;
                var new_row = table.insertRow(pos-1);
                var Cells = new Array(7);
     
                var i = 0;

                for(i = 0; i < 7; i++)
                {
                Cells[i] = new_row.insertCell(i);
                Cells[i].innerHTML = myres[i+1];
                Cells[i].style.color = "rgb(230, 138, 0)"; 
                Cells[i].onclick = function () {
                  edit(this);
                                       };
                }
                table.refresh();       
                
            }
        };
        xmlhttp.open("GET", "find.php?Name=" + document.getElementById(obj).value, true);
        xmlhttp.send();

}

function logout()
{
   window.location  = "index.php";
}