## TALLER 

### CONSULTAS BASICAS 

1. SELECT codigo_oficina, ciudad FROM Oficina

2. SELECT Ciudad, telefono FROM Oficina WHERE Pais = 'Espana';

3. SELECT nombre, apellido, email FROM empleado WHERE codigo_jefe = '7'

4. SELECT nombre, apellido, email FROM empleado WHERE codigo_jefe IS NULL;

5. SELECT nombre, apellido, puesto FROM empleado WHERE puesto = 'Representante ventas';

6. SELECT nombre_cliente FROM Cliente WHERE pais = 'Spain'; 

7. SELECT DISTINCT estado AS "Estados de Pedido" FROM Pedido ORDER BY estado ASC;

8. SELECT DISTINCT Codigo_cliente AS "Código de Cliente" FROM Pedido WHERE Fecha_pedido BETWEEN '2008-01-01' AND '2008-12-31';

9. SELECT Codigo_pedido AS 'Codigo Pedido', Estado FROM Pedido WHERE Estado = 'Rechazado';

10. SELECT Codigo_pedido AS 'Codigo Pedido', Estado, Fecha_Pedido FROM Pedido WHERE MONTH(Fecha_Pedido) = 1 AND Estado = 'Entregado';

11. SELECT fecha_pago, codigo_cliente, total FROM pago WHERE fecha_pago BETWEEN
'2008-01-01' AND '2008-12-31'
AND forma_pago = 'PayPal'ORDER BY total DESC;

12. 