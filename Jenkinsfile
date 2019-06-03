node {
    def port = 5099
    def port_in = 4200
    def name = "trembivia-game"

    stage('Cleaning work folder...') {
            deleteDir() /* clean up our workspace */
    }
    stage('Clone repository') {
        sh 'git clone https://github.com/elenakyrychenko93/trembivia-game.git'
    }

    stage ("Build and run docker image") {

        echo "Building $name "

        sh "docker stop $name || true"
        sh "docker rm $name || true"
        sh "docker build -t trembit/$name ./trembivia-game/."
        sh "docker run -d -p $port:$port_in --name $name -t trembit/$name"
    }
}