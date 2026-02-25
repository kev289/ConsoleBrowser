## TALLER 

### CONSULTAS BASICAS 

--CONSULTAS BASICAS--

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

12. SELECT DISTINCT forma_pago FROM pago;

13. SELECT nombre, gama, stock FROM producto WHERE stock > 100 ORDER BY stock DESC;

14. SELECT nombre_cliente, ciudad, codigo_empleados FROM Cliente WHERE ciudad = 'Madrid' AND codigo_empleados = 11 OR codigo_empleados = 30; 

--CONSULTAS MULTITABLAS--

1. SELECT c.nombre_cliente, e.nombre AS 'Nombre Representante', e.apellido AS 'Apellido Representante' FROM Cliente c JOIN empleado e ON c.codigo_empleados = e.codigo_empleado; 

2. SELECT DISTINCT c.nombre_cliente, e.nombre AS 'Nombre Representante', e.apellido AS 'Apellido Representante' FROM Cliente c INNER JOIN pago p ON c.codigo_cliente = p.codigo_cliente INNER JOIN empleado e ON c.codigo_empleados = e.codigo_empleado;

3. SELECT c.nombre_cliente, e.nombre AS 'Nombre Representante', e.apellido AS 'Apellido Representante' FROM Cliente c INNER JOIN empleado e ON c.codigo_empleados = e.codigo_empleado LEFT JOIN pago p ON c.codigo_cliente = p.codigo_cliente WHERE p.codigo_cliente IS NULL;

4. SELECT DISTINCT c.nombre_cliente, e.nombre AS 'Nombre Representante', e.apellido AS 'Apellido Representante', o.ciudad AS ciudad_oficina
FROM Cliente c INNER JOIN pago p ON c.codigo_cliente = p.codigo_cliente INNER JOIN empleado e ON c.codigo_empleados = e.codigo_empleado INNER JOIN Oficina o ON e.codigo_oficina = o.codigo_oficina;

5. SELECT DISTINCT o.direccion1, o.direccion2, o.Ciudad AS Ciudad FROM Oficina o INNER JOIN empleado e ON o.codigo_oficina = e.codigo_oficina INNER JOIN Cliente c ON e.codigo_empleado = c.codigo_empleados WHERE c.ciudad = 'Fuenlabrada';

6. SELECT e.nombre AS 'Nombre Empleado', e.apellido AS 'Apellido Empleado', j.nombre AS 'Nombre Jefe', j.apellido AS 'Apellido Jefe' FROM empleado e LEFT JOIN empleado j ON e.codigo_jefe = j.codigo_empleado;

7. SELECT e.nombre AS 'Empleado', j.nombre AS 'Jefe', gj.nombre AS 'Jefe del Jefe' FROM empleado e LEFT JOIN empleado j ON e.codigo_jefe = j.codigo_empleado LEFT JOIN empleado gj ON j.codigo_jefe = gj.codigo_empleado;

8. SELECT DISTINCT c.nombre_cliente, p.codigo_pedido, p.Fecha_esperado, p.Fecha_entrega FROM Cliente c INNER JOIN Pedido p ON c.codigo_cliente = p.codigo_cliente WHERE p.Fecha_entrega > p.Fecha_esperado;

9. SELECT DISTINCT c.nombre_cliente, p.gama FROM Cliente c JOIN Pedido pe ON c.codigo_cliente = pe.codigo_cliente JOIN detalle_pedido dp ON pe.codigo_pedido = dp.codigo_pedido JOIN producto p ON dp.codigo_producto = p.codigo_producto;

--CONSULTAS DE CONJUNTOS (SUBCONSULTAS)--

1. SELECT nombre_cliente, telefono_contacto FROM Cliente WHERE codigo_cliente NOT IN (SELECT DISTINCT codigo_cliente FROM pago);

2. SELECT codigo_cliente, nombre_cliente, telefono_contacto, ciudad FROM Cliente WHERE codigo_cliente NOT IN (SELECT DISTINCT codigo_cliente
FROM Pedido);

3. SELECT codigo_cliente, nombre_cliente, telefono_contacto, ciudad FROM Cliente WHERE codigo_cliente NOT IN (SELECT codigo_cliente FROM Pedido) AND codigo_cliente NOT IN (SELECT codigo_cliente FROM pago);

4. SELECT nombre, apellido, puesto FROM empleado WHERE codigo_oficina NOT IN (SELECT codigo_oficina FROM Oficina);

5. SELECT nombre, apellido, puesto, email FROM empleado WHERE codigo_empleado NOT IN (SELECT DISTINCT codigo_empleados FROM Cliente WHERE codigo_empleados IS NOT NULL);

6. SELECT e.nombre, e.apellido, e.puesto, o.ciudad, o.direccion1 AS 'Dirección Oficina' FROM empleado e JOIN Oficina o ON e.codigo_oficina = o.codigo_oficina WHERE e.codigo_empleado NOT IN (SELECT DISTINCT codigo_empleados FROM Cliente WHERE codigo_empleados IS NOT NULL);

7. SELECT nombre, gama, stock, precio_venta FROM producto WHERE codigo_producto NOT IN (SELECT DISTINCT codigo_producto FROM detalle_pedido);

8. 