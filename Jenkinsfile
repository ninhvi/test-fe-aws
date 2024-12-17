pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-build'
        REGISTRY = 'localhost:5000/react-build'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ninhvi/test-fe-aws.git'
            }
        }
        stage('Build React App') {
            steps {
                script {
                    sh 'git fetch'
                    sh 'sudo yarn install'
                    sh 'sudo yarn build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'sudo docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                script {
                    sh 'sudo docker tag ${DOCKER_IMAGE} ${REGISTRY}'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'sudo docker push ${REGISTRY}'
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                script {
                    sh 'sudo docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deploy successful!'
        }
        failure {
            echo 'Build or deploy failed!'
        }
    }
}
