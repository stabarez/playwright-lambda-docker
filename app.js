const SampleRobot = require('./sample-robot')

exports.lambdaHandler = async () => {
    console.log('Lambda handler start.')
    console.log('Run sample robot.')
    SampleRobot()

    const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({ message: 'Robot triggered. Check lambda logs.'})
    }

    return response
}
