pipeline {
    agent any

    environment {
        DOCKER_USER = "2023bcs0042medhashree"
        FRONTEND_IMAGE = "${DOCKER_USER}/2023bcs0042_42_frontend"
        BACKEND_IMAGE = "${DOCKER_USER}/2023bcs0042_42_backend"
    }

    stages {

        stage('Build Images') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./backend'
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([string(credentialsId: 'dockerhub', variable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $BACKEND_IMAGE'
                sh 'docker push $FRONTEND_IMAGE'
            }
        }
    }
}
