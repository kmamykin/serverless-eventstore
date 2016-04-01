#TODO

* CI
* babel/webpack
* cors
* dynamodb provision
* swagger/single function with swagger based router/validations


script:
          name: deploy
          code: |
            export CI=true
            echo "start deployment $CI"
            ./node_modules/.bin/serverless project init
            ./node_modules/.bin/serverless dash summary
            ./node_modules/.bin/serverless function deploy -a -s $SERVERLESS_STAGE -r eu-west-1
            ./node_modules/.bin/serverless endpoint deploy -a -s $SERVERLESS_STAGE -r eu-west-1
            ./node_modules/.bin/serverless resource deploy -c -s $SERVERLESS_STAGE -r eu-west-1
            echo "finished deployment"

@neaghfoz you mean like: sls endpoint deploy -a -s $SERVERLESS_STAGE -d "${SERVERLESS_STAGE} - CI build #${CIRCLE_BUILD_NUM} / ${CIRCLE_SHA1:0:7} by ${CIRCLE_USERNAME}: `git log --pretty=format:"%s" HEAD^..HEAD`" ?

### Codeship env vars

CI
CI_BUILD_NUMBER
CI_BUILD_URL
CI_PULL_REQUEST
CI_BRANCH
CI_COMMIT_ID
CI_COMMITTER_NAME
CI_COMMITTER_EMAIL
CI_COMMITTER_USERNAME
CI_MESSAGE
CI_NAME
