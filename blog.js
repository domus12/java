            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
 
                <script type="text/javascript">
 
                $(document).ready(function(){
 
                });
 
            </script>
        <script type="text/javascript">
 
        var result=0;
 
         function suma()
             {
 
              var cal1 = parseFloat(document.forms["form1"]["cal1"].value);
              var cal2 = parseFloat(document.forms["form1"]["cal2"].value);
 
              var sum = ( 3 * cal2 * Math.pow(10, (7-cal1))); 
 
            document.forms["form1"]["sum"].value=sum
            result=sum;
 
        }         
        </script>
            <style>
 
            </style>
 
            </head>
 
            <body>
        <form name="form1" >
 
 
              pH:
              <input type="text" name="cal1" size="5"><br> 
 
 
              KH[°]:
              <input type="text" name="cal2" size="5"><br> 
 
 
          <input type="button" value="Oblicz" name="add" onClick="suma();"><br> 
 
 
            CO<sub>2</sub>:
            <input type="text" name="sum" size="6"><br> 
 
            <input type="reset" value="Restart wartości"><br>
 
        </form> 
