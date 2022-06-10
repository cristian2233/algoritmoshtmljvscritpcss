function Triangulo(){

    alert("Encuentra aqui el valor del area del triangulo");
    var B;
    var H;
    var A;
    
    B = parseInt(prompt("Digite el valor de la base del triangulo"));
    H = parseInt(prompt("Digite el valor de la base del triangulo"));
    
    A = (B * H) / 2;
    
    alert("El valor del area del triangulo es:"+ A);
    }



    function suma(A, B, sm){
        alert ("RESUELVE AQUI TU TU SUMA");
         
        var A;
        var B;
        var sm;
    
       A = parseInt (prompt("ingresar el numero del primer valor"));
       B = parseInt (prompt("ingresar el numero del segundo valor"));
       sm = A + B;
    
       alert("la suma de los dos valores es:" + sm);
    
    
    }
    
    function resta(C, D, RT){
        alert ("RESUELVE AQUI TU RESTA");
         
        var C;
        var D;
        var RT;
    
       C = parseInt (prompt("ingresar el numero del primer valor"));
       D = parseInt (prompt("ingresar el numero del segundo valor"));
       RT = C - D;
    
       alert("la resta de los dos valores es:" + RT);
    
    }
    function multiplicacion(E, F, MT){
    
        alert ("RESUELVE AQUI TU MULTIPLICACION");
         
        var E;
        var F;
        var MT;
    
       E = parseInt (prompt("ingresar el numero del primer valor"));
       F = parseInt (prompt("ingresar el numero del segundo valor"));
       MT = E * F;
    
       alert("la multiplicacion de los dos valores es:" + MT);
    
    }
    
    function division(G, H, DV){
    
        alert ("RESUELVE AQUI TU DIVISION");
         
        var G;
        var H;
        var DV;
    
       G = parseInt (prompt("ingresar el numero del primer valor"));
       H = parseInt (prompt("ingresar el numero del segundo valor"));
       DV = G / H;
    
       alert("la division de los dos valores es:" + DV);
    
    }
    

    function saludo(){
        alert ("HOLA MUNDO ESTO JS")
    
    }
    function suma(x, y, sm){
        alert ("AQUI PODRAS REALIZAR TUS SUMAS");
    var x;
    var y;
    var sm;
    
    x = parseInt(prompt("ingrese el valor del primer valor"));
    y = parseInt(prompt("ingrese el valor del segundo valor"));
    sm = x + y ;
    
    alert("la suma de los dos valores es:" + sm);
    
    }



    function Conversion(){
        alert ("CONOCE AQUI LOS METROS A CENTIMETROS.");


        var M;
        var Convers;
        
        M = parseInt(prompt("Favor ingresar el numero:"));
        
        Convers = M * 100;
        
        alert (M +"metros es igual a:" + Convers + "centimetros.");
        
           }

           
           function minor(){
            alert("El menor de dos numeros.");
            
            var X1;
            var X2;
            
            
            X1 = parseFloat(prompt("ingrse el primer valor "));
            X2 = parseFloat(prompt("ingrse el segundo valor "));
            
            if (X1 == X2){
                alert("El valor de los numeros " + X1 + "y" + X2 +" son iguales.");
            } else if(X1 > X2){
            alert("El valor del numero mayor es:"+ X1);
            } else {("El valor del numero mayor es:"+ X2);
            
            }
            }
            
            function threeminor(){

                alert("Menor de tres numero ingresados por el usuario.");
            
                var N1;
                var N2;
                var N3;
                var Menor;
                var Igual;
            
                N1 = parseInt(prompt("favor digite el valor del primer numero"));
                N2 = parseInt(prompt("favor digite el valor del segundo numero"));
                N3 = parseInt(prompt("favor digite el valor del tercero numero"));
            
            if (N1 == N2 && N2 == N3){
                Igual = N1;
                alert ("El valor de los numeros digitados son iguales.");
            
            }else if (N1 <= N2 && N2 < N3){
                alert ("El numero menor es:+ Menor");
            
            }else if (N2 <= N1 && N2 < N3){
                Menor = N2;
                alert ("El numero menor es:"+Menor);
            } else{
                Menor = N3;
                alert ("El numero menor es"+ Menor);
            
            }
            
                
            }

            function Cuadrado(){
                alert ("AQUI CONOCERAS EL NUMERO AL CUADRADO");

                var N;
                var Cuadrado;
            
                N = parseInt(prompt("favor digitar el numero:"));
            
                Cuadrado = N * N;
            
                alert("El valor de "+ N +" al cuadrado es:" + Cuadrado);
            }

            function Par(){
                alert ("Aqui conoceras si un numero es par");


                var N;
                var Modular;
            
            
            N = parseInt(prompt ("Digite el numero que desea saber:"));
            
            Modular =(N % 2)
            if (Modular == 0){
                alert ("El numero"+N+" es par.");
            }else{
                alert ("El numero " + N + "es impar.");
            }
            
            }

            function Edad(){
                alert("Favor digite su edad y el sistema le permitira ver el año de nacimiento");

                var edad;
                var año;
                var Nacimiento

                edad = parseInt(prompt("favor digite su eedad:"));
                año = parseInt(prompt("favor digite año actual:"));

                Nacimiento = año - edad;

                alert ("El año en que nacio es:"+ Nacimiento);



            }

            function inversion(){

                alert(" Valor de ganancias segun dinero invertido en el banco.");


                var Capital;
                var ValorMensual;
                var ValorAño;
                var Tiempo;
                var Total;

                Capital = parseInt(prompt("favor digite el valor del capital a invertir:"));
                Tiempo = parseInt(prompt("favor digite numero de años en inversion:"));

                ValorMensual = Capital * 0.02;
                ValorAño = ValorMensual * 12;
                Total = ValorAño * Tiempo;

                alert("El valor mensual de la ganancia es:" + ValorMensual);
                alert("el valor anual de la ganancia es:" + ValorAño);
                alert("El valor totalde la ganancia es:" + Total);
                
              
            }

            function Promedio(){

                alert ("Promedio de notas de los estudiantes");

                var Nota1;
                var Nota2;
                var Nota3;
                var Nota4;
                var Nota5;
                var Promedio;

                Nota1 = parseInt(prompt("favor digite el promedio de su primer nota:"));
                Nota2 = parseInt(prompt("favor digite el promedio de su segunda nota:"));
                Nota3 = parseInt(prompt("favor digite el promedio de su tercera nota:"));
                Nota4 = parseInt(prompt("favor digite el promedio de su cuarta nota:"));
                Nota5 = parseInt(prompt("favor digite el promedio de su quinta nota:"));

                Promedio = (Nota1 + Nota2 + Nota3 + Nota4 + Nota5) / 5

                alert ("El valor del primer promedio es:"+ Promedio);
                if (Promedio <= 2.9){
                    alert ("Reprobado.")

                }else if (Promedio>5){
                    alert ("Error.");

                }else {
                    alert ("Felicidades ha aprovado.")
                }



            }

            function Manzanas(){

                alert("Descuento en la compra de manzanas segun la cantidad en su compra")

                var Kilos;
                var Descuento;
                var Total;

                Kilos = parseInt(prompt("favor digite el numero de cantidad en kilos:"));

                if (Kilos <= 2){
                    Descuento = 0;
                    Total = Kilos * 4500;
                    alert ("El descuento por la compra de manzanas es:"+ Descuento);
                    alert("El total a pagar es:"+ Total);

                }else if (Kilos >= 3 && Kilos <= 5){
                    Descuento = Kilos * 45500* 0.10;
                    Total =(Kilos * 4500) - Descuento;
                    alert("El descuento por su compra en manzanas es:"+ Descuento);
                    alert ("Su total a pagar es:"+Total);

                }else if (Kilos >= 6 && Kilos <= 10){
                    Descuento = Kilos * 4500 * 0.15;
                    Total = (Kilos * 4500) - Descuento;
                    alert ("El descuento en la compra de manzanas es:"+Descuento);
                    alert   ("El valor total a pagar es:"+ Total);

                } else{
                    Descuento = Kilos * 4500 * 0.20;
                    Total = (Kilos * 4500) - Descuento;
                    alert ("Su descuento por la compra de las manzanas es:" + Descuento);
                    alert   ("Su total a pagar es:" + Total);


                }

            }
    
            