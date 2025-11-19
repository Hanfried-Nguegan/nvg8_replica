pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hanfried-nguegan/nvg8_replica.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t nvg8_replica .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop nvg8_replica || true'
                sh 'docker rm nvg8_replica || true'
                sh 'docker run -d --name nvg8_replica -p 8000:8000 nvg8_replica'
            }
        }
    }
}
