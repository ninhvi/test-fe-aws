pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-build'
        REGISTRY = '103.211.207.43:5000/react-build'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ninhvi/test-fe-aws.git'
            }
        }
         stage('Infos Yarn') {
            steps {
                sh 'yarn --version'
            }
        }

        stage('Build React App') {
            steps {
                script {
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
