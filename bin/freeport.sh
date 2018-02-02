function find_a_port {
    local port=$(shuf -i 56000-63000 -n 1)
    netstat -lat | grep $port > /dev/null
    if [[ $? == 1 ]] ; then
        export port=$port
    else
        find_a_port
    fi
}

find_a_port
