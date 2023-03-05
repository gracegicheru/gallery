pipeline {
    agent any
    stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/gracegicheru/gallery', branch: 'master'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        } 
        stage('Test'){
            steps {
                bat 'npm run test'
            }
        }
         stage('deploy'){
            steps {
                bat 'curl -X POST https://api.render.com/deploy/srv-cg28r6g2qv25u2k5nr00?key=Ab2FkjaeheY'
            
            }
        }
       
       
        stage('End') {
            steps {
                echo 'Build is finished'
            }
        }
    }
}
