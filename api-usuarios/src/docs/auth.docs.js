/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Realiza login (autenticação em memória) e retorna um token
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login realizado, token retornado
 *       401:
 *         description: Credenciais inválidas
 */
