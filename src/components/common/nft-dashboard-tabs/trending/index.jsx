import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Help from "@/components/common/help";
import Image from "next/image";

import Kawaii from "@/assets/kawaii.svg";
import Boxing from "@/assets/boxing.svg";
import Verified from "@/assets/verified.svg";
import UToken from "@/assets/orange-m-token.svg";
import BlackUToken from "@/assets/black-u-token.svg";
import BlackMEToken from "@/assets/black-me-token.svg";
import Blue from "@/assets/blue-circle.svg";
import Link from "next/link";

export default function Trending(props) {
  const data = [
    {
      name: "Kawai",
      img: Kawaii,
      img2: Verified,
      img3: UToken,
      img4: BlackUToken,
      img5: BlackMEToken,
      items: "9780",
      holders: "978",
      floorPrice: "0.07 KDA",
      floorPriceChange: "0.30 USD",
      volume: "10,000 KDA",
      volumeChange: "+0.48%",
      tradedOn: "+ 3 more",
      confidence: "High",
    },
    {
      name: "Boxing Badger",
      img: Boxing,
      img2: undefined,
      img3: UToken,
      img4: BlackUToken,
      img5: BlackMEToken,
      items: "8,109,780",
      holders: "10,978",
      floorPrice: "0.07 KDA",
      floorPriceChange: "0.30 USD",
      volume: "10,000 KDA",
      volumeChange: "+0.48%",
      tradedOn: "+ 2 more",
      confidence: "Low",
    },
    {
      name: "John The Great",
      img: Boxing,
      img2: Verified,
      img3: UToken,
      img4: BlackUToken,
      img5: BlackMEToken,
      items: "8,109,780",
      holders: "10,978",
      floorPrice: "0.07 KDA",
      floorPriceChange: "0.30 USD",
      volume: "10,000 KDA",
      volumeChange: "+0.48%",
      tradedOn: "+ 2 more",
      confidence: "Low",
    },
  ];
  return (
    <div>
      <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold rounded-tl-none mb-5">
        {props.title}
      </h2>
      <div className="rounded-xl border overflow-hidden">
        <Table className="border-neutral-table-border">
          <TableHeader>
            <TableRow className="bg-neutral-n-100 hover:bg-neutral-n-100 py-3.5">
              <TableHead className="py-4 h-[44px]">
                <Help
                  label="Collections"
                  tooltipText={
                    <>
                      Tooltip text here.{" "}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </TableHead>
              <TableHead>
                <Help label="Items" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Holders" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help
                  label="Floor Price (KDA)"
                  tooltipText="Tooltip text here"
                />
              </TableHead>
              <TableHead>
                <Help label="Volume 24H" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead>
                <Help label="Traded On" tooltipText="Tooltip text here" />
              </TableHead>
              <TableHead className="p-0">
                <Help label="Confidence" tooltipText="Tooltip text here" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.name}>
                  <TableCell className="flex flex-wrap xl:flex-nowrap items-center gap-3 p-4">
                    {item.img !== undefined && (
                      <Image
                        src={item.img}
                        width={44}
                        height={44}
                        alt="Large Kawaii"
                        className="rounded-lg"
                      />
                    )}
                    <div className="flex items-center">
                      <Link href="/nft-asset">
                        <p className="table-link">{item.name}</p>
                      </Link>
                      {item.img2 !== undefined && (
                        <Image
                          src={item.img2}
                          alt="Verified"
                          width={20}
                          height={20}
                          className="ml-1"
                        />
                      )}
                    </div>
                  </TableCell>
                  <TableCell label="Items" className="table-text px-4">
                    9780
                  </TableCell>
                  <TableCell label="Holders" className="table-text px-4">
                    978
                  </TableCell>
                  <TableCell label="Floor Price">
                    <div className="block px-4">
                      <p className="table-text mb-1">
                        {item.floorPrice ? item.floorPrice : null}
                      </p>
                      <p className="sm-muted-table-text">
                        {item.floorPriceChange ? item.floorPriceChange : null}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell label="Volume 24H">
                    <div>
                      <p className="table-text mb-1 px-4">
                        {item.volume ? item.volume : null}
                      </p>
                      <p className="text-semantic-g-500 text-xs font-normal leading-3 px-4">
                        {item.volumeChange ? item.volumeChange : null}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell label="Traded On" className="px-4">
                    <div className="flex flex-wrap xl:flex:no-wrap lg:flex-nowrap items-center justify-center xl:justify-start">
                      <div className="xl:flex lg:flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
                        <div className="xl:flex lg:flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
                          <Image
                            src={item.img3}
                            alt="Orange Token"
                            width={32}
                            height={32}
                          />
                          <Image
                            src={item.img4}
                            alt="Black Token"
                            width={32}
                            height={32}
                          />
                        </div>
                        <Image
                          src={item.img5}
                          alt="Me Token"
                          width={32}
                          height={32}
                        />
                      </div>
                      <p className="sm-muted-table-text ml-1 mt-1">
                        {item.tradedOn ? item.tradedOn : null}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell
                    label="Confidence"
                    className={
                      item.confidence === "High"
                        ? "text-semantic-g-500 text-sm font-medium leading-[18px]"
                        : item.confidence === "Low"
                        ? "text-[red] text-sm font-medium leading-[18px]"
                        : null
                    }
                  >
                    {item.confidence ? item.confidence : null}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
