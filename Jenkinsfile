pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-build'
        REGISTRY = 'registry:5043/react-build'
    }

    stages {
        stage('Checkout') {
        steps {
            // Checkout nhánh main từ repository
            git branch: 'main', url: 'https://github.com/ninhvi/test-fe-aws.git'
        }
    }

        stage('Build React App') {
            stage('Install Yarn') {
            steps {
                sh 'npm install -g yarn'   
                }
            }
            steps {
                // Chạy lệnh để build ứng dụng React
                script {
                    sh 'yarn install'
                    sh 'yarn build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image từ Dockerfile
                script {
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                // Tag Docker image để push lên registry
                script {
                    sh 'docker tag ${DOCKER_IMAGE} ${REGISTRY}'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Push Docker image lên registry
                script {
                    sh 'docker push ${REGISTRY}'
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                // Các bước deploy Docker container vào môi trường sản xuất
                script {
                    // Nếu sử dụng docker-compose
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
