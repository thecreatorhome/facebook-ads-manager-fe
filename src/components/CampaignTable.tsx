
import { useState } from "react";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "../styles/components/CampaignTable.css";


const CampaignTable = () => {
    const [sortInfo, setSortInfo] = useState({ columnKey: "", order: null });

    const dataSource = [
        {
            key: '1',
            offOn: true,
            campaign: 'Campaign A',
            delivery: 'Active',
            bidStrategy: 'Lowest cost',
            budget: '$100',
            attributionSetting: '7-day click',
            results: '200',
            reach: '1,000',
            impressions: '5,000',
            costPerResult: '$0.50',
            amountSpent: '$100',
            ends: '2025-06-01',
        },
        {
            key: '1',
            offOn: true,
            campaign: 'Campaign B',
            delivery: 'Inactive',
            bidStrategy: 'Lowest cost',
            budget: '$100',
            attributionSetting: '7-day click',
            results: '200',
            reach: '1,000',
            impressions: '5,000',
            costPerResult: '$0.50',
            amountSpent: '$100',
            ends: '2025-06-01',
        }
    ];
    
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
            console.log('Selected row keys:', selectedRowKeys);
            console.log('Selected rows:', selectedRows);
        },
    };

    const handleChange = (pagination: any, filters: any, sorter: any) => {
        setSortInfo(sorter);
      };
    
    
      const columns: ColumnsType<any> = [
        {
            title: (
                <span>
                    Off/On{" "}
                    {sortInfo.columnKey === "offOn" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'offOn',
            key: 'offOn',
            fixed: 'left' as const,
            width: 90,
            sorter: (a, b) => Number(a.offOn) - Number(b.offOn),
            sortOrder: sortInfo.columnKey === "offOn" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Campaign{" "}
                    {sortInfo.columnKey === "campaign" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'campaign',
            key: 'campaign',
            fixed: 'left' as const,
            width: 200,
            sorter: (a, b) => a.campaign.localeCompare(b.campaign),
            sortOrder: sortInfo.columnKey === "campaign" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Delivery{" "}
                    {sortInfo.columnKey === "delivery" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'delivery',
            key: 'delivery',
            width: 200,
            sorter: (a, b) => a.delivery.localeCompare(b.delivery),
            sortOrder: sortInfo.columnKey === "delivery" ? sortInfo.order : null,
        },
        {
            title: 'Bid strategy',
            dataIndex: 'bidStrategy',
            key: 'bidStrategy',
            width: 200,
        },
        {
            title: (
                <span>
                    Budget{" "}
                    {sortInfo.columnKey === "budget" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'budget',
            key: 'budget',
            width: 200,
            sorter: (a, b) =>
                parseFloat(a.budget.replace(/\$/g, '')) - parseFloat(b.budget.replace(/\$/g, '')),
            sortOrder: sortInfo.columnKey === "budget" ? sortInfo.order : null,
        },
        {
            title: 'Attribution setting',
            dataIndex: 'attributionSetting',
            key: 'attributionSetting',
            width: 200,
        },
        {
            title: (
                <span>
                    Results{" "}
                    {sortInfo.columnKey === "results" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'results',
            key: 'results',
            width: 200,
            sorter: (a, b) => Number(a.results) - Number(b.results),
            sortOrder: sortInfo.columnKey === "results" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Reach{" "}
                    {sortInfo.columnKey === "reach" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'reach',
            key: 'reach',
            width: 200,
            sorter: (a, b) => Number(a.reach) - Number(b.reach),
            sortOrder: sortInfo.columnKey === "reach" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Impressions{" "}
                    {sortInfo.columnKey === "impressions" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'impressions',
            key: 'impressions',
            width: 200,
            sorter: (a, b) => Number(a.impressions) - Number(b.impressions),
            sortOrder: sortInfo.columnKey === "impressions" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Cost per result{" "}
                    {sortInfo.columnKey === "costPerResult" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'costPerResult',
            key: 'costPerResult',
            width: 200,
            sorter: (a, b) =>
                parseFloat(a.costPerResult.replace(/\$/g, '')) -
                parseFloat(b.costPerResult.replace(/\$/g, '')),
            sortOrder: sortInfo.columnKey === "costPerResult" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Amount spent{" "}
                    {sortInfo.columnKey === "amountSpent" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'amountSpent',
            key: 'amountSpent',
            width: 200,
            sorter: (a, b) =>
                parseFloat(a.amountSpent.replace(/\$/g, '')) -
                parseFloat(b.amountSpent.replace(/\$/g, '')),
            sortOrder: sortInfo.columnKey === "amountSpent" ? sortInfo.order : null,
        },
        {
            title: (
                <span>
                    Ends{" "}
                    {sortInfo.columnKey === "ends" ? (
                        sortInfo.order === "ascend" ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                    ) : (
                        <>
                            <ArrowUpOutlined />
                            <ArrowDownOutlined />
                        </>
                    )}
                </span>
            ),
            dataIndex: 'ends',
            key: 'ends',
            width: 200,
            sorter: (a, b) => new Date(a.ends).getTime() - new Date(b.ends).getTime(),
            sortOrder: sortInfo.columnKey === "ends" ? sortInfo.order : null,
        }
    ];
    

    return (
        <Table dataSource={dataSource} columns={columns} scroll={{ x: 1500 }}
            rowSelection={rowSelection} 
            onChange={handleChange}/>
    );
};

export default CampaignTable;
