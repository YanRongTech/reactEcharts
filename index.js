import React from 'react';
import echarts from 'echarts';

import {extend} from 'util-toolkit';


let increaseId = 0,
    resizeEventSetted = false,
    resizeInsArr = [];

const defStyle = {
    width: '100%'
};

const defGraphOption = {
    series: []
};

function resizeHandler() {
    resizeInsArr.forEach((rc)=> {
        if (!rc.isDisposed()) {
        rc.resize();
    }
})
}

export default class ReactEcharts extends React.Component {
    constructor(props) {
        super(props);
        this.domId = increaseId++;
        this.chartIns = null;
        this.loading = false;
        this.resize = props.resize;
        if (this.resize && !resizeEventSetted) {
            resizeEventSetted = true;
            window.addEventListener('resize', resizeHandler.bind(this));
        }
    }

    componentWillReceiveProps(nextProps) {
        this.updateDataOption(nextProps.dataSource);
        this.updateGraphOption(nextProps.graphOption);
        if (nextProps.loading && !this.loading) {
            this.loading = true;
            this.chartIns.showLoading();
        } else if (!nextProps.loading && this.loading) {
            this.chartIns.hideLoading();
        }
        return nextProps;
    }

    renderEchart(dom) {
        if (!dom) {
            return false;
        }
        this.chartIns = echarts.init(dom);
        if (this.props.resize) {
            resizeInsArr.push(this.chartIns);
        }
        this.updateGraphOption(this.props.graphOption);
        this.updateDataOption(this.props.dataSource);
    }

    updateGraphOption(graphOption) {
        this.chartIns.setOption(graphOption);
    }

    updateDataOption(dataSource) {
        this.chartIns.setOption({
            series: dataSource || this.props.dataSource || []
        });
    }

    shouldComponentUpdate(nextProps) {
        // render仅与style有关
        return JSON.stringify(nextProps.style) !== JSON.stringify(this.props.style);
    }

    componentWillUnmount() {
        // 清理环境
        if (this.chartIns) {
            this.chartIns.dispose();
            resizeInsArr.some((ins, index)=> {
                if (this.chartIns === ins) {
                resizeInsArr.splice(index);
                return true;
            }
        });
        }
        if (!resizeInsArr.length) {
            resizeEventSetted = false;
            window.removeEventListener('resize', resizeHandler);
        }
    }

    render() {
        const style = extend({}, defStyle, this.props.style);
        return <div id={'rc-echart-' + this.domId} ref={(dom)=>this.renderEchart(dom)} style={style}></div>
    }
}
