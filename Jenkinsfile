pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-build'
        REGISTRY = 'registry:5043/react-build'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ninhvi/test-fe-aws.git'
            }
        }
         stage('Install Yarn') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn --version'
            }
        }

        stage('Build React App') {
            steps {
                script {
                    sh 'yarn install'
                    sh 'yarn build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                script {
                    sh 'docker tag ${DOCKER_IMAGE} ${REGISTRY}'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker push ${REGISTRY}'
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.prod.yml up -d'
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
