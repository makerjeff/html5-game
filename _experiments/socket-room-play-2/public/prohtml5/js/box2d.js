// -- BOX2D --

// declare all commonly used objects as variables for convenience
let b2Vec2              = Box2D.Common.Math.b2Vec2;
let b2BodyDef           = Box2D.Dynamics.b2BodyDef;
let b2Body              = Box2D.Dynamics.b2Body;
let b2FixtureDef        = Box2D.Dynamics.b2FixtureDef;
let b2Fixture           = Box2D.Dynamics.b2Fixture;
let b2World             = Box2D.Dynamics.b2World;
let b2PolygonShape      = Box2D.Collision.Shapes.b2PolygonShape;
let b2CircleShape       = Box2D.Collision.Shapes.b2CircleShape;
let b2DebugDraw         = Box2D.Dynamics.b2DebugDraw;
let b2RevoluteJointDef  = Box2D.Dynamics.Joints.b2RevoluteJointDef;

let world;
let scale = 30; // 30 pixels on canvas = 1 meter in Box2d world

// jeffnote: init() ~= boilerplate.
function init() {
    // Set up the Box2d world that will do most of the physics calculation
    let gravity = new b2Vec2(0, 9.8);   // gravity, 9.8 m/s^2 downward
    let allow_sleep = true;     // Allow objects that are at rest to fall asleep and exclude from calculations.
    world = new b2World(gravity, allow_sleep);
}

function create_floor() {
    // a body definition holds all the data needed  to construct a rigid body.
    let body_def = new b2BodyDef;
    body_def.type = b2Body.b2_staticBody;
    body_def.position.x = 640 / 2 / scale;
    body_def.position.y = 450 / scale;

    // a fixture is used to attach a shape to a body for collision detection.
    // a fixture definition is used to create a fixture.
    let fixture_def = new b2FixtureDef;
    fixture_def.density = 1.0;
    fixture_def.friction = 0.5;
    fixture_def.restitution = 0.2;

    fixture_def.shape = new b2PolygonShape;
    fixture_def.shape.SetAsBox(320 / scale, 10/scale);  // 640 pixels wide and 20 tall

    let body = world.CreateBody(body_def);
    let fixture = body.CreateFixture(fixture_def);
}