function activate(details_ID,ID)
{
   
    var but = document.getElementsByTagName("BUTTON");

     for(var i = 0; i < but.length; ++i)
    {
         if(but[i].id.length > 0 ) 
         {
            document.getElementById(but[i].id).style.fontWeight = "100";
            document.getElementById(but[i].id).style.backgroundColor = "rgb(200,200,200)";
            document.getElementById(but[i].id).style.border = "none";

         }
    }


    document.getElementById(ID).style.fontWeight = "900";
    document.getElementById(ID).style.backgroundColor = "rgb(242, 242, 242)";
    document.getElementById(ID).style.border = "1px solid black";
    
    var divs = document.getElementsByTagName("DIV");


    for(var i = 0; i < divs.length; ++i)
    {
         if(divs[i].id.length > 0 ) 
         {
            document.getElementById(divs[i].id).style.display = "none";
         }
    }

    /*var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert(this.responseText);
                //sessionStorage.setItem("ID1", details_ID);
                //sessionStorage.setItem("ID2", ID);
                //location.reload();
            }
        };
        xmlhttp.open("GET", "reset.php", true);
        xmlhttp.send();*/

    document.getElementById(details_ID).style.display = "block";
     
}
 

 document.addEventListener("DOMContentLoaded", function() {

    var i = 0;
    var list = document.getElementById("Bill_year");
    var list2 = document.getElementById("Processing_year");
    for(i = 2000;i<=5000;i++)
    {
        var option = document.createElement("option");
        option.text = i;
        var option2 = document.createElement("option");
        option2.text = i;
        list.add(option);
        list2.add(option2);
    }
    list = document.getElementById("Bill_month");
    list2 = document.getElementById("Processing_month");
    for(i = 1; i<=12; i++)
    {
        var option = document.createElement("option");
        option.text = i;
        var option2 = document.createElement("option");
        option2.text = i;
        list.add(option);
        list2.add(option2);
    }
    list = document.getElementById("Bill_date");
    list.addEventListener("click",function () {
        var month = document.getElementById("Bill_month").value;
        var year = document.getElementById("Bill_year").value;
        var max = 0;
        this.options.length = 0;
        var i;
        if(month == 4 || month == 6 || month == 9 || month == 11)
        {
            max = 30;
        }
        else if(month == 2)
        {
            if(year % 4 == 0)
                max = 29;
            else
                max = 28;
        }
        else
        {
            max = 31;
        }
        for(i = 1; i <= max ; i++)
        {
            var option = document.createElement("option");
            option.text = i;
            this.add(option);
        }

    });

    list2 = document.getElementById("Processing_date"); 

    list2.addEventListener("click",function () {
        var month = document.getElementById("Processing_month").value;
        var year = document.getElementById("Processing_year").value;
        var max = 0;
        this.options.length = 0;
        var i;
        if(month == 4 || month == 6 || month == 9 || month == 11)
        {
            max = 30;
        }
        else if(month == 2)
        {
            if(year % 4 == 0)
                max = 29;
            else
                max = 28;
        }
        else
        {
            max = 31;
        }
        for(i = 1; i <= max ; i++)
        {
            var option = document.createElement("option");
            option.text = i;
            this.add(option);
        }


    });
    

    var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                var names = JSON.parse(this.responseText);
                var list = document.getElementById("contract_name");
                list.options.length = 0;
                var i = 0;
                for(i = 0; i < names.length ; i++)
                {
                    var option = document.createElement("option");
                    option.text = names[i];
                    list.add(option);
                }
            }
                                                    };
            xmlhttp.open("GET", "getnames.php", true);
            xmlhttp.send();

    var Id1 = sessionStorage.getItem("ID1");
    var Id2 = sessionStorage.getItem("ID2");
    activate(Id1,Id2);        

  });


function AddValues2()
{
    document.getElementById("add2").style.display = "table-row";
    document.getElementById("adding2").style.display = "none";
    document.getElementById("Input2").style.display = "block";
    document.getElementById("update2").style.display = "none";
}

function Check_unique2(table,year,month,arr)
{
    var i = 0;
    var j = arr.length;
    for(i = 1;i < table.rows.length; i++)
    {
        var date = table.rows[i].cells[1].innerHTML;
        var splt = date.split("-");
        if(year == splt[0] && month == splt[1])
        {
            arr[j++] = splt[2];
            return;
        }
    }

}

function Delete2(obj)
{
    table = document.getElementById("P_details");
    var l = table.rows.length;
    var i = 0,j = 0,row;
    for(i = 0;i < l; i++)
    {
        row = table.rows[i];
        for(j = 0;j < 4; j++)
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


function edit2(obj)
{

    obj.onmousedown = function () {
      start = +new Date();
    };


    obj.onmouseup = function () {
      end = +new Date();

      dif = end - start; 
      if(dif > 300)
      {
        Delete2(obj);
      }
      else
      {
        editz2(obj);
      }
    };
}

function editz2(obj)
{
    var x = obj.cellIndex;
    obj.name = obj.innerHTML;
    obj.innerHTML = "";
    if(x == 0)
    {
        var lst = document.getElementById("contract_name").cloneNode(true);
        obj.appendChild(lst);
    }
    
    if(x == 1)
    {
        lst1 = document.getElementById("Bill_year").cloneNode(true);
        lst2 = document.getElementById("Bill_month").cloneNode(true);
        lst3 = document.createElement("select");
        lst3.addEventListener("click",function() {
            var month = lst1.value;
            var year = lst2.value;
            var max = 0;
            //var skip = new array();
            //Check_unique(document.getElementById("P_details"),year,month,skip);
            this.options.length = 0;
            var i;
            if(month == 4 || month == 6 || month == 9 || month == 11)
            {
                max = 30;
            }
            else if(month == 2)
            {
                if(year % 4 == 0)
                    max = 29;
                else
                    max = 28;
            }
            else
            {
                max = 31;
            }
            for(i = 1; i <= max ; i++)
            {
                var option = document.createElement("option");
                option.text = i;
                this.add(option);
            }

         });
        obj.appendChild(lst1);
        obj.appendChild(lst2);
        obj.appendChild(lst3);
    }
    if(x == 2)
    {
        
        Lst1 = document.getElementById("Bill_year").cloneNode(true);
        Lst2 = document.getElementById("Bill_month").cloneNode(true);
        Lst3 = document.createElement("select");
        Lst3.addEventListener("click",function() {
            var month = Lst1.value;
            var year = Lst2.value;
            var max = 0;
            this.options.length = 0;
            var i;
            if(month == 4 || month == 6 || month == 9 || month == 11)
            {
                max = 30;
            }
            else if(month == 2)
            {
                if(year % 4 == 0)
                    max = 29;
                else
                    max = 28;
            }
            else
            {
                max = 31;
            }
            for(i = 1; i <= max ; i++)
            {
                var option = document.createElement("option");
                option.text = i;
                this.add(option);
            }

         });
        obj.appendChild(Lst1);
        obj.appendChild(Lst2);
        obj.appendChild(Lst3);
    }
    if(x == 3)
    {
        var n_data = prompt("Enter new Amount","");
        if(n_data == null )
        {

        }
        else
        {
            obj.innerHTML = n_data;
            obj.style.color = "blue";
        }

    }
}

function Input2()
{    
    var arr = new Array(4);
    document.getElementById("add2").style.display = "none";
    document.getElementById("adding2").style.display = "block";
    document.getElementById("Input2").style.display = "none";
    document.getElementById("update2").style.display = "block";
    arr[0] = document.getElementById("contract_name").value;
    arr[1] = document.getElementById("Bill_year").value + '-' + document.getElementById("Bill_month").value + '-' + document.getElementById("Bill_date").value;
    arr[2] = document.getElementById("Processing_year").value + '-' + document.getElementById("Processing_month").value + '-' + document.getElementById("Processing_date").value;
    arr[3] = document.getElementById("Amount").value;
     

    var table = document.getElementById("P_details");
    var pos = table.rows.length;
    var new_row = table.insertRow(pos-1);
    var Cells = new Array(4);

    for(i = 0; i < 4; i++)
    {
        Cells[i] = new_row.insertCell(i);
        Cells[i].innerHTML = arr[i];
        Cells[i].style.color = "green"; 
        Cells[i].onclick = function () {
            edit2(this);
                                       };
    }
    table.refresh();       

}



function Update2()
{
    var heads = new Array(4);
    heads[0] = "Contract_Name";
    heads[1] = "Bill_Date";
    heads[2] = "Processing_date"
    heads[3] = "Amount";
    var table = document.getElementById("P_details");
    var Row;
    var data_values = new Array(4);
    var i = 0,j = 0;
    for(i = 1; i < table.rows.length; i++)
    {
        Row = table.rows[i];
        if(Row.cells[1].style.color == "green")
        {
            for(j = 0; j<4; j++)
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
            xmlhttp.open("GET", "commit_p.php?data=" + data_values, true);
            xmlhttp.send();
            continue;
        }
        if(Row.style.color == "red")
        {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                alert(this.responseText);
            }
                                                    };
            xmlhttp.open("GET", "commit_p_d.php?data=" + Row.cells[1].innerHTML, true);
            xmlhttp.send();   
        }

    }
    var sel = document.getElementsByTagName("SELECT");
    for(i = 0; i<sel.length - 7 ;i++)
    {
        var x = sel[i].parentNode;
        var index = x.cellIndex;
        var n_data = sel[i].value;

        while (x.hasChildNodes()) 
        {
            x.removeChild(x.lastChild);
        }

        x.innerHTML = n_data;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
                alert(this.responseText);
        }
                                                    };
        xmlhttp.open("GET", "commit_p_m.php?ndata=" + n_data + "&head=" + heads[index] + "&d=" + x.parentNode.cells[1].innerHTML, true);
        xmlhttp.send();
    }
}


function Load2(obj)
{
    var no = document.getElementById(obj).value;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert(this.responseText);
                sessionStorage.setItem("ID1", "Payments");
                sessionStorage.setItem("ID2", "Payments_show");
                location.reload();
            }
        };
        xmlhttp.open("GET", "set.php?No=" + no, true);
        xmlhttp.send();
}

function setnext2(val)
{
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                //alert(this.responseText);
                sessionStorage.setItem("ID1", "Payments");
                sessionStorage.setItem("ID2", "Payments_show");
                location.reload();
            }
        };
        xmlhttp.open("GET", "setnext.php?End=" + val, true);
        xmlhttp.send();
}

function setprev2(val)
{
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                sessionStorage.setItem("ID1", "Payments");
                sessionStorage.setItem("ID2", "Payments_show");
                location.reload();
            }
        };
        xmlhttp.open("GET", "setprev.php?No=" + val, true);
        xmlhttp.send();
}

function Find2(obj1,obj2)
{
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function () {
            if (this.readyState == 4 && this.status == 200)
            {
                var myres = JSON.parse(this.responseText);
                var table = document.getElementById("P_details");
                var pos = table.rows.length;
                var new_row = table.insertRow(pos-1);
                var Cells = new Array(4);
     
                var i = 0;

                for(i = 0; i < 4; i++)
                {
                Cells[i] = new_row.insertCell(i);
                Cells[i].innerHTML = myres[i+1];
                Cells[i].style.color = "rgb(230, 138, 0)"; 
                Cells[i].onclick = function () {
                  edit2(this);
                                       };
                }
                table.refresh();       
                
            }
        };
        xmlhttp.open("GET", "find2.php?Name=" + document.getElementById(obj1).value + "&date=" + document.getElementById(obj2).value, true);
        xmlhttp.send();

}