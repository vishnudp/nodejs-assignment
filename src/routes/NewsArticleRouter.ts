import { Router } from 'express';
import { NewsArticleComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * POST method route
 * @example http://localhost:PORT/v1/users
 * 
 * @swagger
 * /v1/users:
 *   post:
 *      description: Create new User
 *      tags: ["users"]
 *      security:
 *       - cookieAuth: []
 *      requestBody:
 *        description: user creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserSchema'
 *            example:
 *              name: userName
 *              email: test.user@mail.com
 *      responses:
 *        201:
 *          description: return created user
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/UserSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/insert', NewsArticleComponent.create);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/users/:id
 * 
 * @swagger
 * /v1/users/{id}:
 *  get:
 *    description: Get user by userId
 *    tags: ["users"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return user by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/UserSchema'
 */
router.post('/get', NewsArticleComponent.findOne);

router.post('/getAll', NewsArticleComponent.findAll);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/users/:id
 * 
 * @swagger
 * /v1/users/{id}:
 *  delete:
 *    description: Delete user by userId
 *    tags: ["users"]
 *    security:
 *      - cookieAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique userId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted user
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/UserSchema'
 */
router.post('/update', NewsArticleComponent.update);

/**
 * @export {express.Router}
 */
export default router;
